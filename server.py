import http.server
import socketserver
import json
import os
import time
import urllib.parse
import threading

PORT = 8080
ROOMS_FILE = os.path.join(os.path.dirname(__file__), 'cloud_rooms.json')
WATCHED_FILES = ['index.html', 'styles.css', 'app.js']

rooms_lock = threading.Lock()
rooms_data = {}
sse_clients = []  # list of (room_id, wfile)

def load_rooms():
    global rooms_data
    if os.path.exists(ROOMS_FILE):
        try:
            with open(ROOMS_FILE, 'r', encoding='utf-8') as f:
                rooms_data = json.load(f)
        except Exception:
            rooms_data = {}

def save_rooms():
    try:
        with open(ROOMS_FILE, 'w', encoding='utf-8') as f:
            json.dump(rooms_data, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print("Error saving rooms:", e)

def get_code_version():
    mtimes = []
    base = os.path.dirname(__file__)
    for fname in WATCHED_FILES:
        fpath = os.path.join(base, fname)
        if os.path.exists(fpath):
            mtimes.append(str(int(os.path.getmtime(fpath) * 1000)))
    return "-".join(mtimes)

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.SimpleHTTPRequestHandler):
    daemon_threads = True

class LifeTownHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # Keep console clean

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        qs = urllib.parse.parse_qs(parsed.query)

        if parsed.path == '/api/version':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'version': get_code_version()}).encode('utf-8'))
            return

        if parsed.path == '/api/state':
            room = qs.get('room', ['default'])[0]
            with rooms_lock:
                payload = rooms_data.get(room, None)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps(payload or {}).encode('utf-8'))
            return

        if parsed.path == '/api/stream':
            room = qs.get('room', ['default'])[0]
            self.send_response(200)
            self.send_header('Content-Type', 'text/event-stream; charset=utf-8')
            self.send_header('Connection', 'keep-alive')
            self.end_headers()

            client_entry = {'room': room, 'wfile': self.wfile}
            with rooms_lock:
                sse_clients.append(client_entry)
                initial_payload = rooms_data.get(room)

            try:
                # Send initial code version and room state immediately
                init_msg = json.dumps({'type': 'version', 'version': get_code_version()})
                self.wfile.write(f"data: {init_msg}\n\n".encode('utf-8'))
                if initial_payload:
                    st_msg = json.dumps({'type': 'state', 'payload': initial_payload})
                    self.wfile.write(f"data: {st_msg}\n\n".encode('utf-8'))
                self.wfile.flush()

                last_ver = get_code_version()
                while True:
                    time.sleep(1.0)
                    cur_ver = get_code_version()
                    if cur_ver != last_ver:
                        last_ver = cur_ver
                        ver_msg = json.dumps({'type': 'code_reload', 'version': cur_ver})
                        self.wfile.write(f"data: {ver_msg}\n\n".encode('utf-8'))
                    else:
                        self.wfile.write(b": ping\n\n")
                    self.wfile.flush()
            except Exception:
                pass
            finally:
                with rooms_lock:
                    if client_entry in sse_clients:
                        sse_clients.remove(client_entry)
            return

        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        qs = urllib.parse.parse_qs(parsed.query)

        if parsed.path == '/api/state':
            room = qs.get('room', ['default'])[0]
            length = int(self.headers.get('Content-Length', 0))
            raw = self.rfile.read(length).decode('utf-8')
            try:
                payload = json.loads(raw)
            except Exception:
                self.send_response(400)
                self.end_headers()
                return

            with rooms_lock:
                rooms_data[room] = payload
                save_rooms()
                dead = []
                msg = f"data: {json.dumps({'type': 'state', 'payload': payload})}\n\n".encode('utf-8')
                for c in sse_clients:
                    if c['room'] == room:
                        try:
                            c['wfile'].write(msg)
                            c['wfile'].flush()
                        except Exception:
                            dead.append(c)
                for d in dead:
                    sse_clients.remove(d)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"ok":true}')
            return

        self.send_response(404)
        self.end_headers()

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    load_rooms()
    socketserver.TCPServer.allow_reuse_address = True
    server = socketserver.ThreadingTCPServer(('0.0.0.0', PORT), LifeTownHandler)
    print(f"============================================================")
    print(f"  LIFETOWN 3D REAL-TIME SERVER DANG CHAY TAI PORT {PORT}")
    print(f"  - Truy cap tren may nay: http://localhost:{PORT}")
    print(f"  - Tu dong dong bo Task/Lich/Ngan sach (< 0.05 giay)")
    print(f"  - Tu dong cap nhat giao dien khi sua code tren may!")
    print(f"============================================================")
    server.serve_forever()
