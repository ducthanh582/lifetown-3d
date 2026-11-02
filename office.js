// ============================================================================
// LifeOffice 3D · Không Gian Làm Việc Animal Crossing (Thanh 🍁 & Nene 🌸)
// Kế thừa 100% logic, flow công việc & đồng bộ thời gian thực với Thị Trấn Kyoto
// ============================================================================

const STORAGE_KEY = 'lifetown_3d_kyoto_state_v3';
const DEFAULT_ROOM_ID = '280900';
const ROOM_KEY = 'lifetown_3d_room_id';
const UNLOCKED_KEY = 'lifetown_3d_room_unlocked';
const ROLE_KEY = 'lifetown_3d_user_role';
const CLIENT_ID = 'ltoffice_' + Math.random().toString(36).substring(2, 10);

// Khởi tạo State mặc định đồng bộ cấu trúc với LifeTown
const DEFAULT_STATE = {
  currentUser: 'all',
  activeStation: 'pantry_coffee',
  completedStreak: 0,
  currentSeason: 'autumn',
  taskSubTab: 'day',
  thanh: {
    name: 'Thanh',
    title: 'Bàn Làm Việc Thanh · Trưởng Nhóm',
    tasks: {
      day: [
        { id: 'th_d1', title: 'Hoàn thiện kiến trúc văn phòng Animal Crossing', priority: 'Cao', time: '09:00', done: true },
        { id: 'th_d2', title: 'Tối ưu luồng dữ liệu đồng bộ MQTT phòng 280900', priority: 'Cao', time: '14:30', done: true },
        { id: 'th_d3', title: 'Thêm hiệu ứng ăn mừng Confetti khi xong 5 task', priority: 'Trung bình', time: '17:00', done: false },
        { id: 'th_d4', title: 'Hẹn Nene ra quầy Pantry uống cà phê giải lao', priority: 'Cao', time: '20:00', done: false }
      ],
      week: [
        { id: 'th_w1', title: 'Nâng cấp hệ sinh thái SaaS & App công nghệ', priority: 'Cao', time: 'T6', done: true },
        { id: 'th_w2', title: 'Kiểm toán ngân sách tài chính & chi tiêu tháng', priority: 'Trung bình', time: 'CN', done: false }
      ],
      month: [
        { id: 'th_m1', title: 'Đạt mốc 100 task hoàn thành cùng Nene', priority: 'Cao', time: '30/11', done: false }
      ],
      quarter: [
        { id: 'th_q1', title: 'Ra mắt phiên bản LifeTown & LifeOffice hoàn chỉnh', priority: 'Cao', time: 'Q4', done: true }
      ]
    },
    schedule: [
      { id: 'sch_t1', time: '08:30', title: 'Điểm danh văn phòng & pha tách cà phê', tag: 'Sức khỏe' },
      { id: 'sch_t2', time: '09:30', title: 'Review sprint và phân chia to-do list', tag: 'Công việc' },
      { id: 'sch_t3', time: '15:00', title: 'Code tính năng mới & kiểm thử đồ họa 3D', tag: 'Kỹ thuật' },
      { id: 'sch_t4', time: '18:00', title: 'Cùng Nene kiểm tra tiến độ ngày', tag: 'Đồng hành' }
    ],
    finance: {
      balance: 18500000,
      transactions: [
        { id: 'fin_t1', desc: 'Thưởng hoàn thành cột mốc dự án', amount: 5000000, type: 'income', date: '01/11' },
        { id: 'fin_t2', desc: 'Mua tài liệu & bộ icon văn phòng 3D', amount: 450000, type: 'expense', date: '02/11' }
      ]
    },
    apps: [
      { id: 'app_1', name: 'LifeTown 3D Core', tech: 'Three.js / WebGL', progress: 95, status: 'Hoạt động' },
      { id: 'app_2', name: 'Cloud Realtime MQTT Engine', tech: 'WebSocket / MQTT', progress: 98, status: 'Ổn định' },
      { id: 'app_3', name: 'Animal Crossing Office Space', tech: 'Interactive 3D', progress: 100, status: 'Mới ra mắt' }
    ]
  },
  nene: {
    name: 'Nene',
    title: 'Bàn Thiết Kế Nene · Sáng Tạo',
    tasks: {
      day: [
        { id: 'ne_d1', title: 'Thiết kế concept nhân vật thú cưng Animal Crossing', priority: 'Cao', time: '09:30', done: true },
        { id: 'ne_d2', title: 'Chọn bảng màu pastel dịu mắt cho văn phòng', priority: 'Cao', time: '14:00', done: true },
        { id: 'ne_d3', title: 'Trang trí quầy cà phê & máy bán nước tự động', priority: 'Trung bình', time: '16:30', done: false },
        { id: 'ne_d4', title: 'Nghỉ ngơi giải lao & thưởng thức donut', priority: 'Thấp', time: '20:30', done: false }
      ],
      week: [
        { id: 'ne_w1', title: 'Phác thảo bộ sưu tập thời trang công sở cho chibi', priority: 'Cao', time: 'T7', done: false },
        { id: 'ne_w2', title: 'Lên kế hoạch thực đơn đồ uống cho canteen', priority: 'Trung bình', time: 'CN', done: true }
      ],
      month: [
        { id: 'ne_m1', title: 'Hoàn thành bộ minh họa 3D cho dự án đôi', priority: 'Cao', time: '28/11', done: false }
      ],
      quarter: [
        { id: 'ne_q1', title: 'Triển lãm không gian làm việc dễ thương', priority: 'Cao', time: 'Q4', done: true }
      ]
    },
    schedule: [
      { id: 'sch_n1', time: '09:00', title: 'Bắt đầu ngày mới với trà đào & kiểm tra email', tag: 'Thư thái' },
      { id: 'sch_n2', time: '10:30', title: 'Phác thảo moodboard & chọn texture 3D', tag: 'Sáng tạo' },
      { id: 'sch_n3', time: '15:30', title: 'Review bản vẽ cùng Thanh tại Pantry', tag: 'Họp nhóm' },
      { id: 'sch_n4', time: '19:00', title: 'Ghi nhật ký công việc & tưới cây Monstera', tag: 'Cá nhân' }
    ],
    finance: {
      balance: 14200000,
      transactions: [
        { id: 'fin_n1', desc: 'Thù lao thiết kế giao diện đồ họa', amount: 4200000, type: 'income', date: '30/10' },
        { id: 'fin_n2', desc: 'Mua bảng vẽ điện tử & phụ kiện decor bàn', amount: 850000, type: 'expense', date: '01/11' }
      ]
    },
    studio: [
      { id: 'stu_1', name: 'Bộ sticker Animal Crossing dễ thương', progress: 85, status: 'Đang vẽ' },
      { id: 'stu_2', name: 'Thiết kế vách ngăn & ghế xoay màu hồng', progress: 100, status: 'Hoàn tất' }
    ],
    ramenMenu: [
      { id: 'rm_1', name: 'Cà phê Espresso Milano thơm lừng', price: 45000, done: true },
      { id: 'rm_2', name: 'Trà đào hoa cúc mật ong dịu ngọt', price: 42000, done: true },
      { id: 'rm_3', name: 'Bánh donut phủ kem dâu & hạnh nhân', price: 38000, done: false },
      { id: 'rm_4', name: 'Lon nước trái cây ướp lạnh từ máy bán nước', price: 25000, done: false }
    ]
  },
  shared: {
    tasks: [
      { id: 'sh_1', title: 'Cùng nhau dọn dẹp bàn làm việc ngăn nắp mỗi sáng', priority: 'Cao', time: '08:45', done: true },
      { id: 'sh_2', title: 'Họp nhanh 15 phút đầu giờ để thống nhất mục tiêu', priority: 'Cao', time: '09:15', done: true },
      { id: 'sh_3', title: 'Nghỉ giải lao tại Pantry uống cà phê và ăn bánh', priority: 'Trung bình', time: '15:00', done: false },
      { id: 'sh_4', title: 'Tổng kết streak 5 task và bắn pháo hoa ăn mừng', priority: 'Cao', time: '21:00', done: false }
    ],
    roadmap: [
      { milestone: 'Khởi đầu LifeOffice 3D', date: '11/2026', done: true },
      { milestone: 'Đồng bộ hai chiều Phố Cổ & Văn Phòng', date: '11/2026', done: true },
      { milestone: 'Hệ thống tương tác nhân vật thú cưng đa dạng', date: '12/2026', done: false }
    ]
  }
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const merged = Object.assign({}, DEFAULT_STATE, parsed);
      if (merged.nene && !merged.nene.ramenMenu) {
        merged.nene.ramenMenu = JSON.parse(JSON.stringify(DEFAULT_STATE.nene.ramenMenu));
      }
      return merged;
    }
  } catch (e) {
    console.warn('Cannot read localStorage:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState(syncMeta = null) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateWorldBadges();
    updateTopSummary();
    if (typeof publishCloudState === 'function') {
      publishCloudState(syncMeta);
    }
  } catch (e) {
    console.warn('Cannot save localStorage:', e);
  }
}

function formatVND(num) {
  return (num || 0).toLocaleString('vi-VN') + ' đ';
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s ease';
    setTimeout(() => el.remove(), 300);
  }, 3200);
}

// ============================================================================
// HỆ THỐNG TRẠM VĂN PHÒNG (OFFICE STATIONS) — MÔ PHỎNG ẢNH ANIMAL CROSSING
// ============================================================================
const OFFICE_STATIONS = {
  // 1. Quầy Pantry & Cà phê - Nơi gặp gỡ & việc chung
  pantry_coffee: {
    id: 'pantry_coffee',
    side: 'center',
    owner: 'Thanh & Nene',
    name: 'Quầy Pantry Cà Phê & Đồ Ăn Nhẹ',
    shortName: 'Pantry Cà Phê',
    icon: '☕',
    pos: { x: 3.8, y: 0, z: -8.8 },
    labelHeight: 4.8,
    camOffset: { x: 3.8, y: 6.5, z: -2.5 },
    quote: 'Máy pha cà phê đỏ retro và rổ bánh donut thơm phức! Nơi Thanh & Nene hẹn hò nghỉ giải lao giữa giờ.',
    bubble: 'Thư giãn một chút với tách cà phê thơm ngát!'
  },

  // 2. Bàn làm việc của Thanh (Bên trái)
  thanh_desk: {
    id: 'thanh_desk',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Bàn Làm Việc Thanh (🍁 Trưởng Nhóm)',
    shortName: 'Bàn Thanh',
    icon: '💻',
    pos: { x: -4.8, y: 0, z: 2.8 },
    labelHeight: 4.6,
    camOffset: { x: -4.8, y: 6.2, z: 8.8 },
    quote: 'Bàn làm việc của Thanh với màn hình lập trình, xấp tài liệu dự án và khung ảnh kỷ niệm của hai bạn.',
    bubble: 'Tập trung cao độ, hoàn thành từng dòng code và to-do list!'
  },

  // 3. Bàn làm việc của Nene (Bên phải)
  nene_desk: {
    id: 'nene_desk',
    side: 'nene',
    owner: 'Nene',
    name: 'Bàn Thiết Kế Nene (🌸 Sáng Tạo)',
    shortName: 'Bàn Nene',
    icon: '🌸',
    pos: { x: 4.8, y: 0, z: 2.8 },
    labelHeight: 4.6,
    camOffset: { x: 4.8, y: 6.2, z: 8.8 },
    quote: 'Góc làm việc ngọt ngào của Nene với chậu sen đá mini, sổ tay lập kế hoạch và ly trà đào dâu tây.',
    bubble: 'Ý tưởng tuôn trào, sáng tạo từng thiết kế tuyệt đẹp!'
  },

  // 4. Máy bán nước tự động & Cây nước nóng lạnh
  vending_water: {
    id: 'vending_water',
    side: 'nene',
    owner: 'Nene',
    name: 'Máy Bán Nước Tự Động & Bình Nước Lọc',
    shortName: 'Máy Bán Nước Canteen',
    icon: '🥤',
    pos: { x: -1.2, y: 0, z: -8.8 },
    labelHeight: 5.2,
    camOffset: { x: -1.2, y: 6.5, z: -2.5 },
    quote: 'Máy bán nước ngọt phong cách Nhật Bản và bình nước lọc nóng lạnh, nạp đầy năng lượng cho ngày dài.',
    bubble: 'Nạp năng lượng tức thì với đồ uống tươi mát!'
  },

  // 5. Bảng ghim thông báo Corkboard
  bulletin_board: {
    id: 'bulletin_board',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Bảng Ghim Thông Báo Corkboard & Apple Poster',
    shortName: 'Bảng Ghim Dự Án',
    icon: '📌',
    pos: { x: 8.2, y: 0, z: -8.8 },
    labelHeight: 5.5,
    camOffset: { x: 8.2, y: 6.5, z: -2.5 },
    quote: 'Bảng gỗ bần gắn giấy note sắc màu, ảnh kỷ niệm và poster quả táo đỏ, theo dõi mục tiêu lớn & OKR.',
    bubble: 'Nhìn nhận bức tranh toàn cảnh của dự án!'
  },

  // 6. Tủ kính hồ sơ & lưu trữ
  file_cabinet: {
    id: 'file_cabinet',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Tủ Kính Hồ Sơ & Lưu Trữ Tài Chính',
    shortName: 'Tủ Hồ Sơ & Tiền',
    icon: '🗄️',
    pos: { x: -9.2, y: 0, z: -4.0 },
    labelHeight: 5.2,
    camOffset: { x: -3.5, y: 6.5, z: -4.0 },
    quote: 'Tủ tài liệu cửa kính hiện đại lưu trữ sổ sách, hợp đồng và quản lý tài chính thu chi của cả hai.',
    bubble: 'Tài chính minh bạch, hồ sơ ngăn nắp!'
  },

  // 7. Cụm điện thoại bàn & Lịch trình
  phone_schedule: {
    id: 'phone_schedule',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Cụm Điện Thoại Bàn & Lịch Trình',
    shortName: 'Điện Thoại & Lịch',
    icon: '☎️',
    pos: { x: 4.8, y: 0, z: -2.8 },
    labelHeight: 4.6,
    camOffset: { x: 4.8, y: 6.2, z: 3.2 },
    quote: 'Chiếc điện thoại bàn màu xanh ngọc và lịch công tác, quản lý thời gian biểu và các cuộc hẹn quan trọng.',
    bubble: 'Đúng giờ, kỷ luật và chuyên nghiệp!'
  },

  // 8. Bảng biểu đồ KPI & Dashboard
  wall_dashboard: {
    id: 'wall_dashboard',
    side: 'nene',
    owner: 'Nene',
    name: 'Bảng Biểu Đồ Dashboard KPI & Sáng Tạo',
    shortName: 'Biểu Đồ KPI',
    icon: '📊',
    pos: { x: -9.2, y: 0, z: 2.0 },
    labelHeight: 5.5,
    camOffset: { x: -3.5, y: 6.5, z: 2.0 },
    quote: 'Màn hình infographic treo tường hiển thị biểu đồ tròn và cột tiến độ, theo dõi các dự án thiết kế.',
    bubble: 'Theo dõi tiến độ trực quan từng ngày!'
  }
};

// ============================================================================
// KHỞI TẠO THREE.JS SCENE CHO VĂN PHÒNG ANIMAL CROSSING
// ============================================================================
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe5ded4);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.5, 200);
camera.position.set(16, 17, 21);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.target.set(0, 2.5, 0);
controls.minDistance = 8;
controls.maxDistance = 45;
controls.maxPolarAngle = Math.PI / 2.15;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.4;

const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const hitboxes = [];
const worldLabelElements = {};
const animatedObjects = [];

// ============================================================================
// HỆ THỐNG ÁNH SÁNG VĂN PHÒNG (OFFICE LIGHTING)
// ============================================================================
const ambientLight = new THREE.AmbientLight(0xfff7ee, 0.75);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xfffaed, 0.85);
sunLight.position.set(15, 24, 18);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
sunLight.shadow.camera.near = 1;
sunLight.shadow.camera.far = 60;
sunLight.shadow.camera.left = -16;
sunLight.shadow.camera.right = 16;
sunLight.shadow.camera.top = 16;
sunLight.shadow.camera.bottom = -16;
sunLight.shadow.bias = -0.0005;
scene.add(sunLight);

// Đèn thả trần (Overhead linear pendant lights)
const officePendantLights = [];

function createPendantDownlight(x, y, z) {
  const spot = new THREE.SpotLight(0xfff2dc, 0.9, 16, Math.PI / 3, 0.4, 1.2);
  spot.position.set(x, y, z);
  spot.target.position.set(x, 0, z);
  scene.add(spot);
  scene.add(spot.target);
  officePendantLights.push(spot);
  return spot;
}

// ============================================================================
// VẬT LIỆU & TEXTURE TỰ TẠO (CANVAS PROCEDURAL TEXTURES)
// ============================================================================
function createCarpetTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#dcd3c7';
  ctx.fillRect(0, 0, 512, 512);

  // Vân thảm dệt tinh tế
  ctx.strokeStyle = '#d0c6b9';
  ctx.lineWidth = 2;
  for (let i = 0; i < 512; i += 16) {
    ctx.beginPath();
    ctx.moveTo(i, 0); ctx.lineTo(i, 512);
    ctx.moveTo(0, i); ctx.lineTo(512, i);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 6);
  return tex;
}

function createCorkTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 320;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#c79761';
  ctx.fillRect(0, 0, 512, 320);

  // Đốm hạt bần
  for (let i = 0; i < 1500; i++) {
    ctx.fillStyle = Math.random() > 0.5 ? '#b88550' : '#d8a972';
    ctx.fillRect(Math.random() * 512, Math.random() * 320, 2, 2);
  }

  // Poster Quả Táo Đỏ từ ảnh gốc
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(360, 40, 110, 130);
  ctx.fillStyle = '#e74c3c';
  ctx.beginPath();
  ctx.arc(415, 105, 36, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#27ae60';
  ctx.fillRect(412, 60, 8, 14);

  // Giấy note đính ghim (vàng, hồng, xanh)
  ctx.fillStyle = '#fef08a';
  ctx.fillRect(40, 50, 70, 70);
  ctx.fillStyle = '#fbcfe8';
  ctx.fillRect(130, 70, 75, 75);
  ctx.fillStyle = '#bae6fd';
  ctx.fillRect(70, 150, 80, 80);
  ctx.fillStyle = '#bbf7d0';
  ctx.fillRect(230, 90, 90, 110);

  // Ghim tròn
  ctx.fillStyle = '#dc2626';
  ctx.beginPath();
  ctx.arc(75, 55, 4, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(c);
  return tex;
}

function createDashboardTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 280;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 512, 280);

  // Tiêu đề Dashboard
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText('OFFICE KPI & SPRINT PROGRESS', 30, 45);

  // Biểu đồ tròn Pie Chart
  const centerX = 130, centerY = 160, radius = 70;
  // Phần xanh
  ctx.fillStyle = '#10b981';
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 1.25);
  ctx.fill();
  // Phần cam
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, Math.PI * 1.25, Math.PI * 1.7);
  ctx.fill();
  // Phần hồng
  ctx.fillStyle = '#ec4899';
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, Math.PI * 1.7, Math.PI * 2);
  ctx.fill();

  // Biểu đồ cột Bar Chart
  const bars = [80, 120, 95, 140, 110];
  bars.forEach((val, i) => {
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(260 + i * 45, 230 - val, 30, val);
  });

  const tex = new THREE.CanvasTexture(c);
  return tex;
}

function createVendingMachineTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 384;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1565c0';
  ctx.fillRect(0, 0, 256, 384);

  // Cửa kính trưng bày phát sáng
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(20, 25, 216, 210);

  // Các hàng lon nước ngọt
  const colors = ['#e11d48', '#059669', '#d97706', '#2563eb', '#7c3aed'];
  for (let row = 0; row < 3; row++) {
    const y = 45 + row * 65;
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(25, y + 38, 206, 4); // Khay để lon
    for (let col = 0; col < 5; col++) {
      const x = 32 + col * 40;
      ctx.fillStyle = colors[(row + col) % colors.length];
      ctx.fillRect(x, y, 24, 36);
      // Nắp lon bạc
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(x + 2, y - 2, 20, 3);
      // Nút bấm xanh
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(x + 5, y + 43, 14, 8);
    }
  }

  // Khe thả tiền & Khe lấy lon
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(195, 255, 30, 6); // Khe xu
  ctx.fillRect(20, 290, 216, 65); // Cửa lấy lon
  ctx.fillStyle = '#334155';
  ctx.fillRect(26, 296, 204, 53);

  const tex = new THREE.CanvasTexture(c);
  return tex;
}

// Bộ vật liệu dùng chung
const MATS = {
  carpet: new THREE.MeshStandardMaterial({ map: createCarpetTexture(), roughness: 0.85 }),
  wall: new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.9 }),
  wallTrim: new THREE.MeshStandardMaterial({ color: 0xc8bea5, metalness: 0.3, roughness: 0.5 }),
  windowGlass: new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.45, roughness: 0.1 }),
  windowBlinds: new THREE.MeshStandardMaterial({ color: 0xe2ded7, roughness: 0.6 }),
  partitionFrame: new THREE.MeshStandardMaterial({ color: 0x36312d, roughness: 0.6, metalness: 0.3 }),
  partitionGlass: new THREE.MeshPhysicalMaterial({ color: 0xf1ebe1, roughness: 0.75, transmission: 0.3, transparent: true, opacity: 0.9 }),
  deskTop: new THREE.MeshStandardMaterial({ color: 0xdecbb7, roughness: 0.6 }),
  deskMetal: new THREE.MeshStandardMaterial({ color: 0x8a9096, metalness: 0.5, roughness: 0.4 }),
  pinkChair: new THREE.MeshStandardMaterial({ color: 0xf27d95, roughness: 0.5 }),
  pinkChairDark: new THREE.MeshStandardMaterial({ color: 0xd8617b, roughness: 0.55 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.2 }),
  monitorCasing: new THREE.MeshStandardMaterial({ color: 0x22262a, roughness: 0.5 }),
  monitorScreen: new THREE.MeshBasicMaterial({ color: 0x475569 }),
  screenGlow: new THREE.MeshBasicMaterial({ color: 0x38bdf8 }),
  phoneTeal: new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.35 }),
  paperWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }),
  photoFrame: new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.6 }),
  mugBlue: new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.3 }),
  mugPink: new THREE.MeshStandardMaterial({ color: 0xf472b6, roughness: 0.3 }),
  coffeeCredenza: new THREE.MeshStandardMaterial({ color: 0x71717a, roughness: 0.5 }),
  espressoRed: new THREE.MeshStandardMaterial({ color: 0xdc2626, metalness: 0.3, roughness: 0.3 }),
  wickerBasket: new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8 }),
  donutPastry: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.6 }),
  corkBoard: new THREE.MeshStandardMaterial({ map: createCorkTexture(), roughness: 0.85 }),
  corkFrame: new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.7 }),
  dashboardMap: new THREE.MeshBasicMaterial({ map: createDashboardTexture() }),
  vendingMachine: new THREE.MeshStandardMaterial({ map: createVendingMachineTexture(), roughness: 0.4 }),
  waterBase: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }),
  waterJug: new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65, roughness: 0.1, transmission: 0.7 }),
  bookcaseBody: new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 }),
  bookcaseGlass: new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, roughness: 0.1 }),
  monsteraPot: new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.6 }),
  monsteraLeaf: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.45, side: THREE.DoubleSide }),
  fireExtinguisher: new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.3, roughness: 0.3 }),
  airConditioner: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.5 })
};

// ============================================================================
// HÀM DỰNG PHÒNG VĂN PHÒNG CHUẨN ANIMAL CROSSING
// ============================================================================
const officeRoomGroup = new THREE.Group();
scene.add(officeRoomGroup);

function buildOfficeArchitecture() {
  const roomW = 22, roomD = 22, roomH = 10.5;

  // 1. Sàn thảm ấm áp
  const floorGeo = new THREE.PlaneGeometry(roomW, roomD);
  const floorMesh = new THREE.Mesh(floorGeo, MATS.carpet);
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  officeRoomGroup.add(floorMesh);

  // 2. Tường sau (Back Wall, Z = -roomD/2)
  const backWallGeo = new THREE.BoxGeometry(roomW, roomH, 0.4);
  const backWall = new THREE.Mesh(backWallGeo, MATS.wall);
  backWall.position.set(0, roomH / 2, -roomD / 2);
  backWall.receiveShadow = true;
  officeRoomGroup.add(backWall);

  // 3. Tường bên trái (Left Wall, X = -roomW/2)
  const leftWallGeo = new THREE.BoxGeometry(0.4, roomH, roomD);
  const leftWall = new THREE.Mesh(leftWallGeo, MATS.wall);
  leftWall.position.set(-roomW / 2, roomH / 2, 0);
  leftWall.receiveShadow = true;
  officeRoomGroup.add(leftWall);

  // Nẹp tường dọc & nẹp chân tường (Baseboards & Aluminum Trims)
  const baseboardB = new THREE.Mesh(new THREE.BoxGeometry(roomW, 0.35, 0.45), MATS.wallTrim);
  baseboardB.position.set(0, 0.175, -roomD / 2 + 0.05);
  officeRoomGroup.add(baseboardB);

  const baseboardL = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.35, roomD), MATS.wallTrim);
  baseboardL.position.set(-roomW / 2 + 0.05, 0.175, 0);
  officeRoomGroup.add(baseboardL);

  // Các nẹp nhôm phân chia mảng tường
  for (let x = -roomW / 2 + 3.5; x < roomW / 2; x += 3.5) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.08, roomH, 0.45), MATS.wallTrim);
    strip.position.set(x, roomH / 2, -roomD / 2 + 0.05);
    officeRoomGroup.add(strip);
  }
  for (let z = -roomD / 2 + 3.5; z < roomD / 2; z += 3.5) {
    const stripL = new THREE.Mesh(new THREE.BoxGeometry(0.45, roomH, 0.08), MATS.wallTrim);
    stripL.position.set(-roomW / 2 + 0.05, roomH / 2, z);
    officeRoomGroup.add(stripL);
  }

  // 4. Dải cửa sổ thông gió cao (Transom Windows) sát trần nhìn ra bầu trời
  const winBack = new THREE.Mesh(new THREE.PlaneGeometry(roomW - 2, 1.8), MATS.windowGlass);
  winBack.position.set(0, roomH - 1.2, -roomD / 2 + 0.22);
  officeRoomGroup.add(winBack);

  const blindsBack = new THREE.Mesh(new THREE.PlaneGeometry(roomW - 2, 1.8), MATS.windowBlinds);
  blindsBack.position.set(0, roomH - 1.2, -roomD / 2 + 0.23);
  blindsBack.material.transparent = true;
  blindsBack.material.opacity = 0.5;
  officeRoomGroup.add(blindsBack);

  // 5. Máy điều hòa treo tường (Air Conditioner trên tường trái từ góc nhìn ảnh 3)
  const acGroup = new THREE.Group();
  acGroup.position.set(-roomW / 2 + 0.35, 8.2, 1.5);
  const acMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.0, 2.2), MATS.airConditioner);
  acMesh.castShadow = true;
  acGroup.add(acMesh);
  // Cánh louver
  for (let k = 0; k < 4; k++) {
    const louv = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.04, 1.9), MATS.deskMetal);
    louv.position.set(0.02, -0.2 - k * 0.1, 0);
    acGroup.add(louv);
  }
  officeRoomGroup.add(acGroup);
}

// ============================================================================
// HÀM DỰNG GHẾ XOAY VĂN PHÒNG MÀU HỒNG (CUTE PINK SWIVEL CHAIR)
// ============================================================================
function createPinkOfficeChair() {
  const chair = new THREE.Group();

  // Chân sao 5 cánh có bánh xe
  const baseShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.6, 12), MATS.chrome);
  baseShaft.position.y = 0.35;
  chair.add(baseShaft);

  const starCount = 5;
  for (let i = 0; i < starCount; i++) {
    const ang = (i / starCount) * Math.PI * 2;
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.55), MATS.chrome);
    leg.position.set(Math.cos(ang) * 0.25, 0.1, Math.sin(ang) * 0.25);
    leg.rotation.y = -ang;
    chair.add(leg);

    // Bánh xe
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.04, 8), MATS.partitionFrame);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(Math.cos(ang) * 0.48, 0.05, Math.sin(ang) * 0.48);
    chair.add(wheel);
  }

  // Nệm ngồi bọc nỉ hồng
  const seatGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.16, 24);
  const seat = new THREE.Mesh(seatGeo, MATS.pinkChair);
  seat.position.y = 0.72;
  seat.castShadow = true;
  chair.add(seat);

  // Tựa lưng uốn cong mềm mại
  const backGeo = new THREE.BoxGeometry(0.85, 0.9, 0.14);
  const back = new THREE.Mesh(backGeo, MATS.pinkChair);
  back.position.set(0, 1.25, -0.38);
  back.castShadow = true;
  chair.add(back);

  // Khung đỡ tựa lưng sau
  const backSupport = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.08), MATS.chrome);
  backSupport.position.set(0, 0.95, -0.42);
  chair.add(backSupport);

  // Tay vịn 2 bên
  [-0.48, 0.48].forEach(x => {
    const armShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.35, 8), MATS.chrome);
    armShaft.position.set(x, 0.92, 0);
    chair.add(armShaft);

    const armRest = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.42), MATS.pinkChairDark);
    armRest.position.set(x, 1.1, 0);
    chair.add(armRest);
  });

  return chair;
}

// ============================================================================
// HÀM DỰNG BÀN LÀM VIỆC VĂN PHÒNG (OFFICE DESK VỚI HỘC TỦ)
// ============================================================================
function createOfficeDesk(width = 2.4, depth = 1.3, height = 1.2) {
  const desk = new THREE.Group();

  // Mặt bàn gỗ sồi sáng
  const topGeo = new THREE.BoxGeometry(width, 0.1, depth);
  const topMesh = new THREE.Mesh(topGeo, MATS.deskTop);
  topMesh.position.y = height;
  topMesh.castShadow = true;
  topMesh.receiveShadow = true;
  desk.add(topMesh);

  // Khung chân sắt
  const legLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, height, depth - 0.2), MATS.deskMetal);
  legLeft.position.set(-width / 2 + 0.15, height / 2, 0);
  legLeft.castShadow = true;
  desk.add(legLeft);

  // Hộc tủ kéo có ngăn (Pedestal Drawer)
  const drawerW = 0.65, drawerH = height - 0.1, drawerD = depth - 0.2;
  const drawerMesh = new THREE.Mesh(new THREE.BoxGeometry(drawerW, drawerH, drawerD), MATS.deskMetal);
  drawerMesh.position.set(width / 2 - drawerW / 2 - 0.1, drawerH / 2, 0);
  drawerMesh.castShadow = true;
  desk.add(drawerMesh);

  // Tay nắm ngăn kéo
  for (let k = 0; k < 3; k++) {
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.03, 0.04), MATS.chrome);
    handle.position.set(width / 2 - drawerW / 2 - 0.1, 0.3 + k * 0.32, drawerD / 2 + 0.02);
    desk.add(handle);
  }

  return desk;
}

// ============================================================================
// HÀM DỰNG MÀN HÌNH MÁY TÍNH & BÀN PHÍM (DESKTOP COMPUTER)
// ============================================================================
function createDesktopComputer(screenColor = 0x38bdf8) {
  const comp = new THREE.Group();

  // Chân đế
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.04, 16), MATS.monitorCasing);
  comp.add(base);

  const stand = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.35, 0.08), MATS.chrome);
  stand.position.y = 0.2;
  comp.add(stand);

  // Màn hình
  const monitor = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.72, 0.08), MATS.monitorCasing);
  monitor.position.set(0, 0.65, 0);
  monitor.castShadow = true;
  comp.add(monitor);

  // Màn hình phát sáng hiển thị task/code
  const screenMat = new THREE.MeshBasicMaterial({ color: screenColor });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.64), screenMat);
  screen.position.set(0, 0.65, 0.045);
  comp.add(screen);

  // Bàn phím
  const kb = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.025, 0.24), MATS.monitorCasing);
  kb.position.set(0, 0.02, 0.45);
  comp.add(kb);

  // Chuột
  const mouseM = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.03, 0.12), MATS.monitorCasing);
  mouseM.position.set(0.42, 0.02, 0.45);
  comp.add(mouseM);

  return comp;
}

// ============================================================================
// HÀM DỰNG CỤM VÁCH NGĂN CUBICLE (OFFICE PARTITIONS TỪ ẢNH)
// ============================================================================
function createCubiclePartitions() {
  const cubicleGroup = new THREE.Group();

  // Vách ngăn trung tâm dài chia đôi 2 dãy bàn (dài 12m, cao 2.2m)
  const mainDividerW = 0.12, mainDividerH = 2.4, mainDividerL = 12.0;

  // Khung viền kim loại sẫm màu
  const mainFrame = new THREE.Mesh(new THREE.BoxGeometry(mainDividerW, mainDividerH, mainDividerL), MATS.partitionFrame);
  mainFrame.position.set(0, mainDividerH / 2, 0);
  mainFrame.castShadow = true;
  cubicleGroup.add(mainFrame);

  // Tấm panel kính mờ / vải cách âm màu kem
  const panelGeo = new THREE.BoxGeometry(mainDividerW + 0.02, mainDividerH - 0.3, mainDividerL - 0.4);
  const panel = new THREE.Mesh(panelGeo, MATS.partitionGlass);
  panel.position.set(0, mainDividerH / 2, 0);
  cubicleGroup.add(panel);

  // Vách ngăn ngang chia từng ô làm việc (Cross dividers)
  [-3.0, 3.0].forEach(z => {
    [-2.2, 2.2].forEach(x => {
      const crossW = 2.6, crossH = 2.4;
      const crossF = new THREE.Mesh(new THREE.BoxGeometry(crossW, crossH, 0.12), MATS.partitionFrame);
      crossF.position.set(x, crossH / 2, z);
      crossF.castShadow = true;
      cubicleGroup.add(crossF);

      const crossP = new THREE.Mesh(new THREE.BoxGeometry(crossW - 0.3, crossH - 0.3, 0.14), MATS.partitionGlass);
      crossP.position.set(x, crossH / 2, z);
      cubicleGroup.add(crossP);
    });
  });

  return cubicleGroup;
}

// ============================================================================
// HÀM DỰNG MÁY BÁN NƯỚC TỰ ĐỘNG & BÌNH NƯỚC NÓNG LẠNH (VENDING & WATER COOLER)
// ============================================================================
function buildVendingAndWaterDispenser() {
  const group = new THREE.Group();
  group.position.set(OFFICE_STATIONS.vending_water.pos.x, 0, OFFICE_STATIONS.vending_water.pos.z);

  // 1. Máy bán nước ngọt tự động màu xanh dương rực rỡ
  const vendW = 1.8, vendH = 3.6, vendD = 1.2;
  const vendMesh = new THREE.Mesh(new THREE.BoxGeometry(vendW, vendH, vendD), MATS.vendingMachine);
  vendMesh.position.set(0, vendH / 2, 0);
  vendMesh.castShadow = true;
  group.add(vendMesh);

  // Nóc máy phát quang nhẹ
  const topLight = new THREE.PointLight(0x60a5fa, 0.6, 4);
  topLight.position.set(0, vendH - 0.5, vendD / 2 + 0.3);
  group.add(topLight);

  // 2. Bình nước lọc nóng lạnh (Water Dispenser) cạnh máy bán nước
  const wdGroup = new THREE.Group();
  wdGroup.position.set(-1.8, 0, 0);

  // Thân máy trắng
  const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.8, 0.8), MATS.waterBase);
  baseMesh.position.set(0, 0.9, 0);
  baseMesh.castShadow = true;
  wdGroup.add(baseMesh);

  // Vòi nước nóng (đỏ) & lạnh (xanh)
  [-0.15, 0.15].forEach((vx, idx) => {
    const tap = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.12, 0.12), idx === 0 ? MATS.espressoRed : MATS.mugBlue);
    tap.position.set(vx, 1.4, 0.42);
    wdGroup.add(tap);
  });

  // Bình nước 5 gallon úp ngược màu xanh cyan trong suốt
  const jugMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.38, 0.85, 16), MATS.waterJug);
  jugMesh.position.set(0, 2.25, 0);
  wdGroup.add(jugMesh);

  // Nắp bình
  const jugCap = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.15, 12), MATS.mugBlue);
  jugCap.position.set(0, 1.85, 0);
  wdGroup.add(jugCap);

  group.add(wdGroup);

  registerStationHitbox('vending_water', group, 3.2, 4.0);
  officeRoomGroup.add(group);
}

// ============================================================================
// HÀM DỰNG QUẦY PANTRY CÀ PHÊ & DONUT (COFFEE STATION)
// ============================================================================
function buildPantryCoffeeStation() {
  const group = new THREE.Group();
  group.position.set(OFFICE_STATIONS.pantry_coffee.pos.x, 0, OFFICE_STATIONS.pantry_coffee.pos.z);

  // Tủ credenza đựng đồ màu xám bạc
  const credW = 2.8, credH = 1.3, credD = 1.2;
  const credMesh = new THREE.Mesh(new THREE.BoxGeometry(credW, credH, credD), MATS.coffeeCredenza);
  credMesh.position.set(0, credH / 2, 0);
  credMesh.castShadow = true;
  group.add(credMesh);

  // Máy pha cà phê espresso đỏ retro
  const espGroup = new THREE.Group();
  espGroup.position.set(-0.65, credH, 0);

  const espBody = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.85, 0.75), MATS.espressoRed);
  espBody.position.y = 0.425;
  espBody.castShadow = true;
  espGroup.add(espBody);

  // Đồng hồ áp suất & núm xoay kim loại
  const gauge = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.03, 12), MATS.chrome);
  gauge.rotation.x = Math.PI / 2;
  gauge.position.set(-0.2, 0.6, 0.39);
  espGroup.add(gauge);

  // Cần lọc (Portafilter)
  const porta = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.25, 8), MATS.partitionFrame);
  porta.rotation.z = Math.PI / 2;
  porta.position.set(0.15, 0.35, 0.42);
  espGroup.add(porta);

  group.add(espGroup);

  // Rổ mây đựng bánh donut phủ kem
  const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.32, 0.2, 16), MATS.wickerBasket);
  basket.position.set(0.7, credH + 0.1, 0);
  group.add(basket);

  // Các chiếc donut ngon mắt
  for (let d = 0; d < 3; d++) {
    const donut = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.06, 8, 16), MATS.donutPastry);
    donut.rotation.x = Math.PI / 2 + Math.random() * 0.2;
    donut.position.set(0.65 + (d - 1) * 0.14, credH + 0.22, (d % 2) * 0.08);
    group.add(donut);
  }

  registerStationHitbox('pantry_coffee', group, 3.2, 3.2);
  officeRoomGroup.add(group);
}

// ============================================================================
// HÀM DỰNG BẢNG GHIM THÔNG BÁO CORKBOARD & APPLE POSTER
// ============================================================================
function buildCorkBulletinBoard() {
  const group = new THREE.Group();
  group.position.set(OFFICE_STATIONS.bulletin_board.pos.x, 0, OFFICE_STATIONS.bulletin_board.pos.z);

  // Bảng gỗ bần gắn trên tường sau
  const boardW = 3.2, boardH = 2.0;
  const boardMesh = new THREE.Mesh(new THREE.BoxGeometry(boardW, boardH, 0.08), MATS.corkBoard);
  boardMesh.position.set(0, 4.2, 0.04);
  boardMesh.castShadow = true;
  group.add(boardMesh);

  // Khung gỗ viền quanh bảng
  const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(boardW + 0.16, boardH + 0.16, 0.06), MATS.corkFrame);
  frameMesh.position.set(0, 4.2, 0);
  group.add(frameMesh);

  registerStationHitbox('bulletin_board', group, 3.5, 5.0);
  officeRoomGroup.add(group);
}

// ============================================================================
// HÀM DỰNG TỦ KÍNH HỒ SƠ & LƯU TRỮ TÀI CHÍNH (LEFT WALL)
// ============================================================================
function buildFileCabinet() {
  const group = new THREE.Group();
  group.position.set(OFFICE_STATIONS.file_cabinet.pos.x, 0, OFFICE_STATIONS.file_cabinet.pos.z);

  // Thân tủ trắng
  const cabW = 1.2, cabH = 4.2, cabL = 3.6;
  const cabMesh = new THREE.Mesh(new THREE.BoxGeometry(cabW, cabH, cabL), MATS.bookcaseBody);
  cabMesh.position.set(0, cabH / 2, 0);
  cabMesh.castShadow = true;
  group.add(cabMesh);

  // Các kệ đựng hồ sơ & sách nhiều màu
  const binderColors = [0xef4444, 0x3b82f6, 0x10b981, 0xf59e0b, 0x8b5cf6];
  for (let shelf = 0; shelf < 3; shelf++) {
    const sy = 1.0 + shelf * 1.1;
    for (let b = 0; b < 6; b++) {
      const bColor = binderColors[(shelf + b) % binderColors.length];
      const binder = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.75, 0.18), new THREE.MeshStandardMaterial({ color: bColor }));
      binder.position.set(0.1, sy, -cabL / 2 + 0.5 + b * 0.45);
      group.add(binder);
    }
  }

  // Cửa kính trượt mờ
  const glassDoor = new THREE.Mesh(new THREE.BoxGeometry(0.04, cabH - 0.4, cabL - 0.4), MATS.bookcaseGlass);
  glassDoor.position.set(cabW / 2 + 0.02, cabH / 2, 0);
  group.add(glassDoor);

  registerStationHitbox('file_cabinet', group, 3.2, 4.8);
  officeRoomGroup.add(group);
}

// ============================================================================
// HÀM DỰNG BẢNG BIỂU ĐỒ KPI & DASHBOARD (LEFT WALL)
// ============================================================================
function buildWallDashboard() {
  const group = new THREE.Group();
  group.position.set(OFFICE_STATIONS.wall_dashboard.pos.x, 0, OFFICE_STATIONS.wall_dashboard.pos.z);

  // Màn hình bảng biểu đồ treo tường
  const dashW = 0.08, dashH = 2.0, dashL = 3.2;
  const dashMesh = new THREE.Mesh(new THREE.BoxGeometry(dashW, dashH, dashL), MATS.dashboardMap);
  dashMesh.position.set(0.04, 4.8, 0);
  dashMesh.castShadow = true;
  group.add(dashMesh);

  // Khung viền kim loại
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.06, dashH + 0.14, dashL + 0.14), MATS.monitorCasing);
  frame.position.set(0, 4.8, 0);
  group.add(frame);

  registerStationHitbox('wall_dashboard', group, 3.2, 5.2);
  officeRoomGroup.add(group);
}

// ============================================================================
// HÀM DỰNG TRẠM BÀN LÀM VIỆC (THANH, NENE & ĐỒNG NGHIỆP ANIMAL CROSSING)
// ============================================================================
function buildWorkstations() {
  // Thêm vách ngăn cubicle trung tâm
  officeRoomGroup.add(createCubiclePartitions());

  // 1. BÀN LÀM VIỆC CỦA THANH (Cubicle Front-Left)
  const thanhGroup = new THREE.Group();
  thanhGroup.position.set(OFFICE_STATIONS.thanh_desk.pos.x, 0, OFFICE_STATIONS.thanh_desk.pos.z);

  const deskT = createOfficeDesk(2.6, 1.4, 1.25);
  thanhGroup.add(deskT);

  const compT = createDesktopComputer(0x38bdf8); // Màn hình code xanh
  compT.position.set(-0.35, 1.3, -0.15);
  thanhGroup.add(compT);

  // Khung ảnh để bàn kỷ niệm của Thanh & Nene
  const frameT = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.45, 0.05), MATS.photoFrame);
  frameT.rotation.y = -Math.PI / 6;
  frameT.position.set(0.8, 1.5, -0.2);
  thanhGroup.add(frameT);

  // Xấp tài liệu dự án
  const papersT = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.15, 0.32), MATS.paperWhite);
  papersT.position.set(0.7, 1.35, 0.25);
  thanhGroup.add(papersT);

  // Cốc trà ấm
  const mugT = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.18, 12), MATS.mugBlue);
  mugT.position.set(-0.9, 1.38, 0.2);
  thanhGroup.add(mugT);

  // Ghế xoay hồng của Thanh
  const chairT = createPinkOfficeChair();
  chairT.position.set(-0.35, 0, 1.45);
  thanhGroup.add(chairT);

  registerStationHitbox('thanh_desk', thanhGroup, 3.4, 3.4);
  officeRoomGroup.add(thanhGroup);

  // 2. BÀN LÀM VIỆC CỦA NENE (Cubicle Front-Right)
  const neneGroup = new THREE.Group();
  neneGroup.position.set(OFFICE_STATIONS.nene_desk.pos.x, 0, OFFICE_STATIONS.nene_desk.pos.z);

  const deskN = createOfficeDesk(2.6, 1.4, 1.25);
  neneGroup.add(deskN);

  const compN = createDesktopComputer(0xf472b6); // Màn hình thiết kế hồng
  compN.position.set(0.35, 1.3, -0.15);
  neneGroup.add(compN);

  // Ly trà sữa / latte dâu
  const mugN = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.2, 12), MATS.mugPink);
  mugN.position.set(0.95, 1.4, 0.2);
  neneGroup.add(mugN);

  // Chậu sen đá mini dễ thương
  const potN = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.14, 12), MATS.monsteraPot);
  potN.position.set(-0.85, 1.36, -0.2);
  neneGroup.add(potN);

  const plantN = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), MATS.monsteraLeaf);
  plantN.position.set(-0.85, 1.5, -0.2);
  neneGroup.add(plantN);

  // Ghế xoay hồng của Nene
  const chairN = createPinkOfficeChair();
  chairN.position.set(0.35, 0, 1.45);
  neneGroup.add(chairN);

  registerStationHitbox('nene_desk', neneGroup, 3.4, 3.4);
  officeRoomGroup.add(neneGroup);

  // 3. CỤM ĐIỆN THOẠI BÀN & LỊCH TRÌNH (Cubicle Back-Right)
  const phoneGroup = new THREE.Group();
  phoneGroup.position.set(OFFICE_STATIONS.phone_schedule.pos.x, 0, OFFICE_STATIONS.phone_schedule.pos.z);

  const deskP = createOfficeDesk(2.6, 1.4, 1.25);
  phoneGroup.add(deskP);

  // Chiếc điện thoại bàn màu xanh ngọc từ ảnh
  const phoneMesh = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.15, 0.38), MATS.phoneTeal);
  phoneMesh.position.set(0.85, 1.36, 0.1);
  phoneGroup.add(phoneMesh);

  // Ống nghe điện thoại
  const handset = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.42), MATS.phoneTeal);
  handset.position.set(0.85, 1.48, 0.1);
  phoneGroup.add(handset);

  // Màn hình POS / Máy tính văn phòng
  const compP = createDesktopComputer(0x10b981);
  compP.position.set(-0.2, 1.3, 0.1);
  phoneGroup.add(compP);

  // Ghế xoay
  const chairP = createPinkOfficeChair();
  chairP.rotation.y = Math.PI;
  chairP.position.set(-0.2, 0, -1.45);
  phoneGroup.add(chairP);

  registerStationHitbox('phone_schedule', phoneGroup, 3.4, 3.4);
  officeRoomGroup.add(phoneGroup);
}

// ============================================================================
// HÀM DỰNG NHÂN VẬT ANIMAL CROSSING DỄ THƯƠNG TỪ BỨC ẢNH
// ============================================================================
function buildAnimalCrossingVillagers() {
  const villagersGroup = new THREE.Group();

  // 1. Bé Gấu Trắng (White Bear Villager) ngồi tại bàn điện thoại gõ máy tính
  const bearGroup = new THREE.Group();
  bearGroup.position.set(4.6, 0.75, -2.8);
  bearGroup.rotation.y = Math.PI;

  // Đầu gấu tròn
  const bearHead = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }));
  bearHead.position.y = 1.15;
  bearGroup.add(bearHead);

  // Tai gấu tròn có má hồng
  [-0.45, 0.45].forEach(ex => {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), new THREE.MeshStandardMaterial({ color: 0xffffff }));
    ear.position.set(ex, 1.58, 0);
    bearGroup.add(ear);
    const innerEar = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), MATS.pinkChair);
    innerEar.position.set(ex, 1.58, 0.1);
    bearGroup.add(innerEar);
  });

  // Áo len hồng
  const bearBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.75, 14), MATS.pinkChair);
  bearBody.position.y = 0.55;
  bearGroup.add(bearBody);

  villagersGroup.add(bearGroup);
  animatedObjects.push({ obj: bearHead, baseRotY: bearHead.rotation.y, speed: 1.8, range: 0.08 });

  // 2. Bé Gái Villager Áo Vàng (đứng cạnh quan sát công việc)
  const girlGroup = new THREE.Group();
  girlGroup.position.set(3.4, 0, -2.4);

  const girlHead = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), new THREE.MeshStandardMaterial({ color: 0xfde047, roughness: 0.7 }));
  girlHead.position.y = 1.8;
  girlGroup.add(girlHead);

  // Tóc đuôi ngựa & kính tròn
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.46, 12, 12), new THREE.MeshStandardMaterial({ color: 0x451a03 }));
  hair.position.set(0, 1.9, -0.1);
  girlGroup.add(hair);

  const girlBody = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 0.85, 12), new THREE.MeshStandardMaterial({ color: 0xeab308 }));
  girlBody.position.y = 1.1;
  girlGroup.add(girlBody);

  villagersGroup.add(girlGroup);

  // 3. Bé Mèo Nâu Tai Đỏ (Cat Villager) ngồi ở bàn sau
  const catGroup = new THREE.Group();
  catGroup.position.set(8.2, 0.75, -2.8);
  catGroup.rotation.y = Math.PI;

  const catHead = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshStandardMaterial({ color: 0x78350f }));
  catHead.position.y = 1.1;
  catGroup.add(catHead);

  // Tai mèo nhọn có viền đỏ
  [-0.35, 0.35].forEach(cx => {
    const earC = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.32, 4), new THREE.MeshStandardMaterial({ color: 0xb91c1c }));
    earC.position.set(cx, 1.55, 0);
    catGroup.add(earC);
  });

  const catBody = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.44, 0.7, 12), new THREE.MeshStandardMaterial({ color: 0x0284c7 }));
  catBody.position.y = 0.55;
  catGroup.add(catBody);

  villagersGroup.add(catGroup);
  animatedObjects.push({ obj: catHead, baseRotY: catHead.rotation.y, speed: 2.2, range: 0.1 });

  // 4. Bé Sếu / Hạc Trắng Mỏ Vàng (Crane Villager) ở bờ bên trái
  const craneGroup = new THREE.Group();
  craneGroup.position.set(-4.8, 0.75, -2.8);
  craneGroup.rotation.y = Math.PI;

  const craneHead = new THREE.Mesh(new THREE.SphereGeometry(0.44, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffffff }));
  craneHead.position.y = 1.15;
  craneGroup.add(craneHead);

  // Mào đỏ
  const crown = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshStandardMaterial({ color: 0xdc2626 }));
  crown.position.set(0, 1.58, 0.05);
  craneGroup.add(crown);

  // Mỏ dài màu vàng
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.45, 8), new THREE.MeshStandardMaterial({ color: 0xf59e0b }));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 1.05, 0.55);
  craneGroup.add(beak);

  const craneBody = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.42, 0.75, 12), new THREE.MeshStandardMaterial({ color: 0x15803d }));
  craneBody.position.y = 0.55;
  craneGroup.add(craneBody);

  villagersGroup.add(craneGroup);

  officeRoomGroup.add(villagersGroup);
}

// ============================================================================
// HÀM DỰNG PHỤ KIỆN VĂN PHÒNG (CÂY MONSTERA, BÌNH CHỮA CHÁY, ĐÈN THẢ TRẦN)
// ============================================================================
function buildOfficeAccessories() {
  // 1. Cây Trầu Bà Lá Xẻ Monstera (Front Left)
  const monsteraGroup = new THREE.Group();
  monsteraGroup.position.set(-8.2, 0, 6.2);

  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.45, 1.2, 16), MATS.monsteraPot);
  pot.position.y = 0.6;
  pot.castShadow = true;
  monsteraGroup.add(pot);

  // Các cành lá xẻ duyên dáng
  for (let l = 0; l < 7; l++) {
    const ang = (l / 7) * Math.PI * 2;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 1.6, 6), MATS.monsteraLeaf);
    stem.position.set(Math.cos(ang) * 0.4, 1.6, Math.sin(ang) * 0.4);
    stem.rotation.z = Math.cos(ang) * 0.45;
    stem.rotation.x = Math.sin(ang) * 0.45;
    monsteraGroup.add(stem);

    const leaf = new THREE.Mesh(new THREE.CircleGeometry(0.5, 12), MATS.monsteraLeaf);
    leaf.position.set(Math.cos(ang) * 0.9, 2.3, Math.sin(ang) * 0.9);
    leaf.rotation.x = -Math.PI / 3 + Math.sin(ang) * 0.2;
    leaf.rotation.y = ang;
    monsteraGroup.add(leaf);
  }
  officeRoomGroup.add(monsteraGroup);

  // 2. Bình Chữa Cháy Đỏ (Fire Extinguisher ở góc trước)
  const feGroup = new THREE.Group();
  feGroup.position.set(-9.8, 0, 9.2);

  const feBody = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.0, 16), MATS.fireExtinguisher);
  feBody.position.y = 0.55;
  feBody.castShadow = true;
  feGroup.add(feBody);

  const feHandle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.18), MATS.partitionFrame);
  feHandle.position.set(0, 1.12, 0);
  feGroup.add(feHandle);

  const feHose = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 6), MATS.partitionFrame);
  feHose.position.set(0.18, 0.65, 0);
  feGroup.add(feHose);

  officeRoomGroup.add(feGroup);

  // 3. Thùng carton đựng bản vẽ cuộn tròn (Front Right Corner)
  const boxGroup = new THREE.Group();
  boxGroup.position.set(9.2, 0, 8.5);

  const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.0, 1.0), MATS.wickerBasket);
  boxMesh.position.y = 0.5;
  boxMesh.castShadow = true;
  boxGroup.add(boxMesh);

  // Cuộn giấy vẽ thò ra ngoài
  for (let p = 0; p < 4; p++) {
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.4, 8), MATS.paperWhite);
    roll.position.set((p - 1.5) * 0.22, 1.0, (p % 2) * 0.15);
    roll.rotation.z = (p - 1.5) * 0.12;
    boxGroup.add(roll);
  }
  officeRoomGroup.add(boxGroup);

  // 4. Các đèn thả trần chữ nhật màu đen hiện đại (Pendant Linear Lights)
  const pendantPositions = [
    { x: -4.8, y: 7.2, z: 0 },
    { x: 4.8, y: 7.2, z: 0 },
    { x: 0, y: 7.2, z: -7.0 }
  ];

  pendantPositions.forEach(p => {
    const pendGroup = new THREE.Group();
    pendGroup.position.set(p.x, p.y, p.z);

    // Dây treo thanh mảnh
    [-1.2, 1.2].forEach(wx => {
      const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 3.2, 6), MATS.chrome);
      wire.position.set(wx, 1.6, 0);
      pendGroup.add(wire);
    });

    // Thân đèn hộp đen
    const pendFixture = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.22, 0.45), MATS.partitionFrame);
    pendFixture.castShadow = true;
    pendGroup.add(pendFixture);

    // Mặt kính LED phát sáng dưới
    const pendLed = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.38), new THREE.MeshBasicMaterial({ color: 0xfffaed }));
    pendLed.rotation.x = Math.PI / 2;
    pendLed.position.y = -0.115;
    pendGroup.add(pendLed);

    createPendantDownlight(p.x, p.y - 0.2, p.z);
    officeRoomGroup.add(pendGroup);
  });
}

// ============================================================================
// HỆ THỐNG HITBOX & NHÃN NỔI 3D (3D LABELS & HITBOXES)
// ============================================================================
function registerStationHitbox(stationId, objectGroup, width = 3, height = 3.5) {
  const geo = new THREE.BoxGeometry(width, height, width);
  const mat = new THREE.MeshBasicMaterial({ visible: false });
  const hitbox = new THREE.Mesh(geo, mat);
  hitbox.position.y = height / 2;
  hitbox.userData = { stationId };
  objectGroup.add(hitbox);
  hitboxes.push(hitbox);

  createWorldLabel(stationId);
}

function createWorldLabel(stationId) {
  const st = OFFICE_STATIONS[stationId];
  if (!st) return;

  const container = document.getElementById('labels-container');
  if (!container) return;

  const el = document.createElement('div');
  el.className = 'world-label';
  el.id = `label-${stationId}`;
  el.innerHTML = `
    <div class="label-bubble">
      <span class="icon">${st.icon}</span>
      <span>${st.shortName}</span>
      <span class="label-badge" id="badge-${stationId}">0 task</span>
    </div>
    <div class="label-pointer"></div>
  `;

  el.addEventListener('click', (e) => {
    e.stopPropagation();
    selectStation(stationId, true);
  });

  container.appendChild(el);
  worldLabelElements[stationId] = el;
}

function updateWorldBadges() {
  const isThanh = state.currentUser === 'thanh';
  const isNene = state.currentUser === 'nene';

  const thanhDayTasks = (state.thanh && state.thanh.tasks && state.thanh.tasks.day) || [];
  const tOpen = thanhDayTasks.filter(t => !t.done).length;

  const neneDayTasks = (state.nene && state.nene.tasks && state.nene.tasks.day) || [];
  const nOpen = neneDayTasks.filter(t => !t.done).length;

  const sharedTasks = (state.shared && state.shared.tasks) || [];
  const shOpen = sharedTasks.filter(t => !t.done).length;

  const setB = (id, count) => {
    const b = document.getElementById(`badge-${id}`);
    if (b) {
      if (count === 0) {
        b.textContent = '✓ Xong';
        b.className = 'label-badge done-badge';
      } else {
        b.textContent = `${count} to-do`;
        b.className = 'label-badge';
      }
    }
  };

  setB('pantry_coffee', shOpen);
  setB('thanh_desk', tOpen);
  setB('nene_desk', nOpen);
  setB('vending_water', (state.nene && state.nene.ramenMenu ? state.nene.ramenMenu.filter(m => !m.done).length : 0));
  setB('bulletin_board', (state.thanh && state.thanh.apps ? state.thanh.apps.length : 0));
  setB('file_cabinet', 2);
  setB('phone_schedule', (state.thanh && state.thanh.schedule ? state.thanh.schedule.length : 0));
  setB('wall_dashboard', (state.nene && state.nene.studio ? state.nene.studio.length : 0));
}

function updateTopSummary() {
  const thanhDay = (state.thanh && state.thanh.tasks && state.thanh.tasks.day) || [];
  const neneDay = (state.nene && state.nene.tasks && state.nene.tasks.day) || [];
  const sharedDay = (state.shared && state.shared.tasks) || [];

  let totalTasks = 0, doneTasks = 0, bal = 0;

  if (state.currentUser === 'thanh') {
    totalTasks = thanhDay.length + sharedDay.length;
    doneTasks = thanhDay.filter(t => t.done).length + sharedDay.filter(t => t.done).length;
    bal = (state.thanh && state.thanh.finance && state.thanh.finance.balance) || 0;
  } else if (state.currentUser === 'nene') {
    totalTasks = neneDay.length + sharedDay.length;
    doneTasks = neneDay.filter(t => t.done).length + sharedDay.filter(t => t.done).length;
    bal = (state.nene && state.nene.finance && state.nene.finance.balance) || 0;
  } else {
    totalTasks = thanhDay.length + neneDay.length + sharedDay.length;
    doneTasks = thanhDay.filter(t => t.done).length + neneDay.filter(t => t.done).length + sharedDay.filter(t => t.done).length;
    bal = ((state.thanh && state.thanh.finance && state.thanh.finance.balance) || 0) +
          ((state.nene && state.nene.finance && state.nene.finance.balance) || 0);
  }

  const tasksEl = document.getElementById('top-stat-tasks');
  const budEl = document.getElementById('top-stat-budget');
  const fwStreakEl = document.getElementById('fw-streak-text');

  if (tasksEl) tasksEl.textContent = `${doneTasks}/${totalTasks} việc`;
  if (budEl) budEl.textContent = `Số dư: ${formatVND(bal)}`;
  if (fwStreakEl) fwStreakEl.textContent = `${state.completedStreak || 0}/5 task`;
}

// ============================================================================
// CHỌN TRẠM & DI CHUYỂN CAMERA MƯỢT MÀ (SELECT STATION & CAMERA TWEEN)
// ============================================================================
let camTarget = null;
let controlsTarget = null;
let camLerpFactor = 0;

function selectStation(stationId, moveCamera = true) {
  const st = OFFICE_STATIONS[stationId] || OFFICE_STATIONS.pantry_coffee;
  state.activeStation = stationId;

  // Cập nhật dock buttons
  document.querySelectorAll('.dock-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.station === stationId);
  });

  // Mở inspector card
  renderInspector();
  const card = document.getElementById('inspector-card');
  if (card) card.classList.remove('collapsed');

  // Bay camera mượt mà
  if (moveCamera) {
    camTarget = new THREE.Vector3(st.camOffset.x, st.camOffset.y, st.camOffset.z);
    controlsTarget = new THREE.Vector3(st.pos.x, 1.2, st.pos.z);
    camLerpFactor = 0;
  }
}

// ============================================================================
// GIAO DIỆN QUẢN LÝ TASK & INSPECTOR CARD
// ============================================================================
function renderInspector() {
  const st = OFFICE_STATIONS[state.activeStation] || OFFICE_STATIONS.pantry_coffee;

  const avEl = document.getElementById('insp-avatar');
  const tiEl = document.getElementById('insp-title');
  const qtEl = document.getElementById('insp-quote');
  const bodyEl = document.getElementById('insp-body');

  if (avEl) avEl.textContent = st.icon;
  if (tiEl) tiEl.textContent = st.name;
  if (qtEl) qtEl.textContent = `"${st.quote}"`;
  if (!bodyEl) return;

  // 1. Pantry Cà phê (Việc chung của 2 bạn)
  if (st.id === 'pantry_coffee') {
    bodyEl.innerHTML = renderSharedTasksUI();
  }
  // 2. Bàn làm việc của Thanh
  else if (st.id === 'thanh_desk') {
    bodyEl.innerHTML = renderRoleTasksUI('thanh');
  }
  // 3. Bàn làm việc của Nene
  else if (st.id === 'nene_desk') {
    bodyEl.innerHTML = renderRoleTasksUI('nene');
  }
  // 4. Máy bán nước & Canteen
  else if (st.id === 'vending_water') {
    bodyEl.innerHTML = renderVendingMenuUI();
  }
  // 5. Bảng ghim dự án Corkboard
  else if (st.id === 'bulletin_board') {
    bodyEl.innerHTML = renderAppsAndRoadmapUI();
  }
  // 6. Tủ hồ sơ & tài chính
  else if (st.id === 'file_cabinet') {
    bodyEl.innerHTML = renderFinanceUI();
  }
  // 7. Cụm điện thoại & Lịch trình
  else if (st.id === 'phone_schedule') {
    bodyEl.innerHTML = renderScheduleUI();
  }
  // 8. Bảng biểu đồ KPI
  else if (st.id === 'wall_dashboard') {
    bodyEl.innerHTML = renderDashboardKPIUI();
  }
}

function renderRoleTasksUI(role) {
  const isThanh = role === 'thanh';
  const roleData = state[role];
  const subTab = state.taskSubTab || 'day';
  const list = roleData.tasks[subTab] || [];
  const doneCount = list.filter(t => t.done).length;

  return `
    <div class="task-tabs">
      <button class="tab-btn ${subTab === 'day' ? 'active' : ''}" onclick="window.setTaskTab('${role}', 'day')">Hôm Nay</button>
      <button class="tab-btn ${subTab === 'week' ? 'active' : ''}" onclick="window.setTaskTab('${role}', 'week')">Tuần Này</button>
      <button class="tab-btn ${subTab === 'month' ? 'active' : ''}" onclick="window.setTaskTab('${role}', 'month')">Tháng Này</button>
      <button class="tab-btn ${subTab === 'quarter' ? 'active' : ''}" onclick="window.setTaskTab('${role}', 'quarter')">Mục Tiêu Quý</button>
    </div>

    <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:8px;">
      <span>Tiến độ to-do ${isThanh ? '🍁 Thanh' : '🌸 Nene'}:</span>
      <span style="color:var(--office-green); font-size:13px;">${doneCount}/${list.length} xong</span>
    </div>

    <div class="item-list">
      ${list.map(t => {
        const badgeClass = t.priority === 'Cao' ? 'red' : (t.priority === 'Trung bình' ? 'orange' : 'green');
        return `
          <div class="list-item ${t.done ? 'done' : ''}">
            <div class="item-left">
              <input type="checkbox" class="item-check" ${t.done ? 'checked' : ''}
                onchange="window.toggleTask('${role}', '${subTab}', '${t.id}')" />
              <div>
                <div class="task-name">${t.title}</div>
                <div style="font-size:10px; color:var(--text-sub); display:flex; gap:6px; margin-top:2px;">
                  <span class="tag-badge ${badgeClass}">${t.priority}</span>
                  <span>⏰ ${t.time}</span>
                </div>
              </div>
            </div>
            <button class="delete-btn" onclick="window.deleteTask('${role}', '${subTab}', '${t.id}')">✕</button>
          </div>
        `;
      }).join('')}
    </div>

    <form class="add-task-form" onsubmit="window.handleAddTask(event, '${role}', '${subTab}')">
      <input class="task-input" id="new-task-title-${role}" placeholder="+ Thêm việc cần làm mới..." required autocomplete="off" />
      <button type="submit" class="btn-primary">Thêm</button>
    </form>
  `;
}

function renderSharedTasksUI() {
  const list = state.shared.tasks || [];
  const doneCount = list.filter(t => t.done).length;

  return `
    <div style="background:#fef3c7; border:1px solid #fde68a; border-radius:12px; padding:10px; margin-bottom:12px; font-size:11px; color:#92400e;">
      ☕ <b>Góc Pantry Thư Giãn:</b> Nhiệm vụ chung của hai bạn. Cùng nhau tích lũy hoàn thành task để nhận Đại Tiệc Pháo Hoa ăn mừng văn phòng!
    </div>

    <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:8px;">
      <span>Nhiệm vụ chung:</span>
      <span style="color:var(--office-green);">${doneCount}/${list.length} xong</span>
    </div>

    <div class="item-list">
      ${list.map(t => `
        <div class="list-item ${t.done ? 'done' : ''}">
          <div class="item-left">
            <input type="checkbox" class="item-check" ${t.done ? 'checked' : ''}
              onchange="window.toggleSharedTask('${t.id}')" />
            <div>
              <div class="task-name">${t.title}</div>
              <div style="font-size:10px; color:var(--text-sub); margin-top:2px;">⏰ ${t.time}</div>
            </div>
          </div>
          <button class="delete-btn" onclick="window.deleteSharedTask('${t.id}')">✕</button>
        </div>
      `).join('')}
    </div>

    <form class="add-task-form" onsubmit="window.handleAddSharedTask(event)">
      <input class="task-input" id="new-shared-title" placeholder="+ Thêm mục tiêu chung..." required autocomplete="off" />
      <button type="submit" class="btn-primary">Thêm</button>
    </form>
  `;
}

function renderVendingMenuUI() {
  const menu = state.nene.ramenMenu || [];
  return `
    <div style="background:#e0f2fe; border:1px solid #bae6fd; border-radius:12px; padding:10px; margin-bottom:12px; font-size:11px; color:#0369a1;">
      🥤 <b>Máy Bán Nước Canteen:</b> Danh sách đồ uống giải nhiệt & món ăn nhẹ tự thưởng sau khi giải quyết các đầu việc khó!
    </div>

    <div class="item-list">
      ${menu.map(m => `
        <div class="list-item ${m.done ? 'done' : ''}">
          <div class="item-left">
            <input type="checkbox" class="item-check" ${m.done ? 'checked' : ''}
              onchange="window.toggleVendingItem('${m.id}')" />
            <div>
              <div class="task-name">${m.name}</div>
              <div style="font-size:10px; color:var(--accent-orange); font-weight:700;">${formatVND(m.price)}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAppsAndRoadmapUI() {
  const apps = state.thanh.apps || [];
  return `
    <div style="font-size:12px; font-weight:700; margin-bottom:8px;">📌 Hệ Sinh Thái Công Nghệ & Dự Án:</div>
    <div class="item-list">
      ${apps.map(a => `
        <div class="list-item" style="flex-direction:column; align-items:flex-start; gap:4px;">
          <div style="display:flex; justify-content:space-between; width:100%;">
            <span style="font-weight:700; font-size:12px;">💻 ${a.name}</span>
            <span class="tag-badge green">${a.status}</span>
          </div>
          <div style="font-size:10px; color:var(--text-sub);">${a.tech} · ${a.progress}% hoàn tất</div>
          <div style="width:100%; height:4px; background:#eee; border-radius:2px; overflow:hidden;">
            <div style="width:${a.progress}%; height:100%; background:var(--office-pink-dark);"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderFinanceUI() {
  const balT = (state.thanh && state.thanh.finance && state.thanh.finance.balance) || 0;
  const balN = (state.nene && state.nene.finance && state.nene.finance.balance) || 0;

  return `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">
      <div style="background:#fdf2f8; border:1px solid #fbcfe8; border-radius:12px; padding:10px; text-align:center;">
        <div style="font-size:10px; color:var(--text-sub); font-weight:700;">🍁 Quỹ Của Thanh</div>
        <div style="font-size:14px; font-weight:800; color:#db2777; margin-top:4px;">${formatVND(balT)}</div>
      </div>
      <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:10px; text-align:center;">
        <div style="font-size:10px; color:var(--text-sub); font-weight:700;">🌸 Quỹ Của Nene</div>
        <div style="font-size:14px; font-weight:800; color:#16a34a; margin-top:4px;">${formatVND(balN)}</div>
      </div>
    </div>
    <div style="font-size:11px; color:var(--text-sub); line-height:1.4;">
      💡 Tất cả giao dịch chi tiêu & tiền lương đều được đồng bộ tự động với Thị trấn Kyoto.
    </div>
  `;
}

function renderScheduleUI() {
  const sch = state.thanh.schedule || [];
  return `
    <div style="font-size:12px; font-weight:700; margin-bottom:8px;">☎️ Lịch Trình Công Tác & Timeline:</div>
    <div class="item-list">
      ${sch.map(s => `
        <div class="list-item">
          <div>
            <span style="font-weight:700; font-size:11px; color:var(--office-blue); margin-right:6px;">${s.time}</span>
            <span style="font-size:12px;">${s.title}</span>
          </div>
          <span class="tag-badge blue">${s.tag}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderDashboardKPIUI() {
  return `
    <div style="font-size:12px; font-weight:700; margin-bottom:8px;">📊 Báo Cáo Tiến Độ Sáng Tạo & KPI:</div>
    <div style="background:#fff; border:1px solid var(--office-border); border-radius:12px; padding:12px; text-align:center;">
      <div style="font-size:14px; font-weight:800; color:var(--office-dark);">96.5% Tỷ Lệ Hoàn Thành Đúng Hạn</div>
      <div style="font-size:11px; color:var(--text-sub); margin-top:4px;">Tất cả mục tiêu sprint đều duy trì phong độ xuất sắc!</div>
    </div>
  `;
}

// ============================================================================
// HÀNH ĐỘNG WINDOW FUNCTIONS (TASK INTERACTIONS & CELEBRATION REWARD)
// ============================================================================
window.setTaskTab = function(role, tab) {
  state.taskSubTab = tab;
  renderInspector();
};

window.toggleTask = function(role, tab, id) {
  const task = state[role].tasks[tab].find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    if (task.done) {
      handleTaskCompletionReward(role === 'thanh' ? 'thanh_desk' : 'nene_desk', task.title);
    }
    saveState({ station: role === 'thanh' ? 'thanh_desk' : 'nene_desk', msg: `Task: ${task.title}` });
    renderInspector();
  }
};

window.deleteTask = function(role, tab, id) {
  state[role].tasks[tab] = state[role].tasks[tab].filter(t => t.id !== id);
  saveState({ station: role === 'thanh' ? 'thanh_desk' : 'nene_desk', msg: 'Xóa task' });
  renderInspector();
};

window.handleAddTask = function(e, role, tab) {
  e.preventDefault();
  const input = document.getElementById(`new-task-title-${role}`);
  const val = input ? input.value.trim() : '';
  if (!val) return;

  state[role].tasks[tab].push({
    id: `tk_${Date.now()}`,
    title: val,
    priority: 'Cao',
    time: 'Trong ngày',
    done: false
  });
  input.value = '';
  saveState({ station: role === 'thanh' ? 'thanh_desk' : 'nene_desk', msg: `Thêm task: ${val}` });
  renderInspector();
};

window.toggleSharedTask = function(id) {
  const t = state.shared.tasks.find(x => x.id === id);
  if (t) {
    t.done = !t.done;
    if (t.done) {
      handleTaskCompletionReward('pantry_coffee', t.title);
    }
    saveState({ station: 'pantry_coffee', msg: `Việc chung: ${t.title}` });
    renderInspector();
  }
};

window.deleteSharedTask = function(id) {
  state.shared.tasks = state.shared.tasks.filter(x => x.id !== id);
  saveState({ station: 'pantry_coffee', msg: 'Xóa việc chung' });
  renderInspector();
};

window.handleAddSharedTask = function(e) {
  e.preventDefault();
  const input = document.getElementById('new-shared-title');
  const val = input ? input.value.trim() : '';
  if (!val) return;

  state.shared.tasks.push({
    id: `sh_${Date.now()}`,
    title: val,
    priority: 'Cao',
    time: 'Hôm nay',
    done: false
  });
  input.value = '';
  saveState({ station: 'pantry_coffee', msg: `Thêm việc chung: ${val}` });
  renderInspector();
};

window.toggleVendingItem = function(id) {
  const item = state.nene.ramenMenu.find(m => m.id === id);
  if (item) {
    item.done = !item.done;
    saveState({ station: 'vending_water', msg: `Canteen: ${item.name}` });
    renderInspector();
  }
};

function handleTaskCompletionReward(stationId, taskTitle) {
  state.completedStreak = (state.completedStreak || 0) + 1;
  const st = OFFICE_STATIONS[stationId] || OFFICE_STATIONS.pantry_coffee;

  spawnConfetti(st.pos.x, 3.5, st.pos.z);
  playChimeSound();

  if (state.completedStreak >= 5) {
    state.completedStreak = 0;
    setTimeout(() => {
      triggerMegaCelebration('🎉 CHÚC MỪNG HOÀN THÀNH 5 TASK! ĐẠI TIỆC ĂN MỪNG VĂN PHÒNG! 🎉');
    }, 500);
  } else {
    showToast(`🎉 Xong việc: "${taskTitle}"! Tích lũy ${state.completedStreak}/5 task để mở tiệc ăn mừng!`);
  }
}

// ============================================================================
// HIỆU ỨNG ĂN MỪNG PHÁO HOA GIẤY (CONFETTI CELEBRATION)
// ============================================================================
const confettiParticles = [];

function spawnConfetti(originX, originY, originZ) {
  const count = 45;
  const colors = [0xf43f5e, 0x3b82f6, 0x10b981, 0xf59e0b, 0x8b5cf6, 0xffffff];

  for (let i = 0; i < count; i++) {
    const geo = new THREE.PlaneGeometry(0.12, 0.08);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
    const p = new THREE.Mesh(geo, mat);

    p.position.set(originX, originY, originZ);

    const speed = 2.5 + Math.random() * 3.5;
    const ang = Math.random() * Math.PI * 2;
    const up = 2.0 + Math.random() * 4.0;

    const vel = new THREE.Vector3(
      Math.cos(ang) * speed,
      up,
      Math.sin(ang) * speed
    );

    scene.add(p);
    confettiParticles.push({
      mesh: p,
      vel,
      rotSpeed: new THREE.Vector3(Math.random() * 8, Math.random() * 8, Math.random() * 8),
      life: 2.5
    });
  }
}

function triggerMegaCelebration(msg) {
  const banner = document.getElementById('mega-fireworks-banner');
  const sub = document.getElementById('fw-banner-sub');
  if (sub) sub.textContent = msg;
  if (banner) {
    banner.classList.remove('hidden');
    setTimeout(() => banner.classList.add('hidden'), 5500);
  }

  // Bắn confetti liên hồi ở 4 góc văn phòng
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const x = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 12;
      spawnConfetti(x, 4.0, z);
    }, i * 350);
  }
}

function playChimeSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

// ============================================================================
// CHẾ ĐỘ NGÀY / ĐÊM VĂN PHÒNG (DAY / NIGHT LIGHTING)
// ============================================================================
let isNightMode = false;

function toggleDayNight() {
  isNightMode = !isNightMode;
  document.body.classList.toggle('office-dark-mode', isNightMode);

  if (isNightMode) {
    scene.background.setHex(0x1a1715);
    ambientLight.color.setHex(0xffe8d6);
    ambientLight.intensity = 0.35;
    sunLight.intensity = 0.2;
    officePendantLights.forEach(p => p.intensity = 1.6);
    showToast('🌙 Chế độ làm việc buổi tối: Đèn văn phòng & màn hình máy tính đã bật sáng lung linh!');
  } else {
    scene.background.setHex(0xe5ded4);
    ambientLight.color.setHex(0xfff7ee);
    ambientLight.intensity = 0.75;
    sunLight.intensity = 0.85;
    officePendantLights.forEach(p => p.intensity = 0.9);
    showToast('☀️ Chế độ ban ngày: Ánh sáng tự nhiên ngập tràn văn phòng!');
  }
}

// ============================================================================
// TƯƠNG TÁC LÃNG MẠN / GIẢI LAO CÀ PHÊ (ROMANTIC COFFEE BREAK)
// ============================================================================
function triggerCoffeeBreak() {
  selectStation('pantry_coffee', true);
  spawnConfetti(OFFICE_STATIONS.pantry_coffee.pos.x, 3.5, OFFICE_STATIONS.pantry_coffee.pos.z);
  showToast('☕ Thanh 🍁 & Nene 🌸 cùng bước ra quầy Pantry uống cà phê, trò chuyện và trao nhau nụ cười ấm áp!');
  if (typeof publishCloudState === 'function') {
    publishCloudState({ station: 'pantry_coffee', msg: '☕ Thanh & Nene đang cùng uống cà phê giải lao!' });
  }
}

// ============================================================================
// XỬ LÝ PERSONA & VAI TRÒ (ROLE SWITCHER)
// ============================================================================
function setPersonaView(persona) {
  state.currentUser = persona;
  document.getElementById('btn-role-thanh').classList.toggle('active', persona === 'thanh');
  document.getElementById('btn-role-nene').classList.toggle('active', persona === 'nene');
  document.getElementById('btn-role-all').classList.toggle('active', persona === 'all');

  const heroBanner = document.getElementById('hero-banner-title');
  if (persona === 'thanh') {
    if (heroBanner) heroBanner.innerHTML = '🍁 Khu Vực Bàn Làm Việc Của Thanh (Trưởng Nhóm)';
    selectStation('thanh_desk', true);
  } else if (persona === 'nene') {
    if (heroBanner) heroBanner.innerHTML = '🌸 Khu Vực Bàn Thiết Kế Của Nene (Sáng Tạo)';
    selectStation('nene_desk', true);
  } else {
    if (heroBanner) heroBanner.innerHTML = '🏢 Văn Phòng Animal Crossing · Thanh 🍁 &amp; Nene 🌸';
    selectStation('pantry_coffee', true);
  }
  updateTopSummary();
}

// ============================================================================
// MÀN HÌNH KHÓA & MÃ PHÒNG (LOCK SCREEN GATEKEEPER 280900)
// ============================================================================
let currentRoomId = localStorage.getItem(ROOM_KEY) || DEFAULT_ROOM_ID;
let isRoomUnlocked = localStorage.getItem(UNLOCKED_KEY) === '1';

const lockModal = document.getElementById('lock-screen');
const lockFormEl = document.getElementById('lock-form');
const lockPinInput = document.getElementById('lock-room-input');
const lockShowPin = document.getElementById('lock-show-pin');
const btnEnterDemo = document.getElementById('btn-enter-demo');

if (lockShowPin && lockPinInput) {
  lockShowPin.addEventListener('change', e => {
    lockPinInput.type = e.target.checked ? 'text' : 'password';
  });
}

function handleLockSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const enteredPin = (lockPinInput ? lockPinInput.value : '').trim();
  const selectedRoleEl = document.querySelector('input[name="lock_role"]:checked');
  const role = selectedRoleEl ? selectedRoleEl.value : 'all';
  const rememberMeEl = document.getElementById('lock-remember-me');
  const remember = rememberMeEl ? rememberMeEl.checked : true;
  const errorEl = document.getElementById('lock-error');

  if (!enteredPin) {
    if (errorEl) {
      errorEl.textContent = 'Vui lòng nhập mã phòng bí mật!';
      errorEl.style.display = 'block';
    }
    return;
  }

  if (enteredPin === DEFAULT_ROOM_ID || enteredPin === '280900') {
    unlockWithRoomAndRole(enteredPin, role, remember);
  } else {
    if (errorEl) {
      errorEl.textContent = 'Mật mã phòng không đúng! Gợi ý: 280900';
      errorEl.style.display = 'block';
    }
  }
}

if (lockFormEl) lockFormEl.addEventListener('submit', handleLockSubmit);

if (btnEnterDemo) {
  btnEnterDemo.addEventListener('click', (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const selectedRoleEl = document.querySelector('input[name="lock_role"]:checked');
    const role = selectedRoleEl ? selectedRoleEl.value : 'all';
    unlockWithRoomAndRole(DEFAULT_ROOM_ID, role, false);
  });
}

function unlockWithRoomAndRole(roomId, role, remember = true) {
  currentRoomId = roomId;
  isRoomUnlocked = true;
  if (remember) {
    localStorage.setItem(ROOM_KEY, roomId);
    localStorage.setItem(UNLOCKED_KEY, '1');
    localStorage.setItem(ROLE_KEY, role);
  }
  if (lockModal) {
    lockModal.classList.add('hidden');
    lockModal.style.display = 'none';
  }
  setPersonaView(role);
  connectRealtimeCloud();
  buildShareLinks();
  showToast(`🏢 Chào mừng ${role === 'thanh' ? 'Thanh 🍁' : (role === 'nene' ? 'Nene 🌸' : 'hai bạn')} đã vào Văn Phòng 3D!`);
}

if (isRoomUnlocked) {
  if (lockModal) {
    lockModal.classList.add('hidden');
    lockModal.style.display = 'none';
  }
  const savedRole = localStorage.getItem(ROLE_KEY) || 'all';
  setPersonaView(savedRole);
  connectRealtimeCloud();
  buildShareLinks();
} else {
  if (lockModal) {
    lockModal.classList.remove('hidden');
    lockModal.style.display = 'flex';
  }
}

// ============================================================================
// ĐỒNG BỘ THỜI GIAN THỰC QUA CLOUD MQTT (REAL-TIME CLOUD SYNC)
// ============================================================================
let mqttClients = [];
const seenMsgIds = new Set();

function updateSyncStatusUI(status, text) {
  const dot = document.getElementById('sync-status-dot');
  const txt = document.getElementById('sync-status-text');
  if (dot) {
    dot.className = 'status-dot';
    if (status === 'online') dot.classList.add('online');
  }
  if (txt) txt.textContent = text;
}

function buildShareLinks() {
  const baseUrl = window.location.origin + window.location.pathname;
  const editInput = document.getElementById('input-share-edit');
  const roomInput = document.getElementById('input-room-id');
  if (editInput) editInput.value = `${baseUrl}`;
  if (roomInput) roomInput.value = currentRoomId;
}

function connectRealtimeCloud() {
  if (typeof mqtt === 'undefined') {
    updateSyncStatusUI('offline', '☁️ Offline');
    return;
  }

  updateSyncStatusUI('connecting', '☁️ Đang kết nối...');
  const brokers = [
    'wss://broker.emqx.io:8084/mqtt',
    'wss://broker.hivemq.com:8884/mqtt'
  ];
  const topic = `lifetown3d/room/${currentRoomId}/sync`;

  brokers.forEach((bUrl) => {
    try {
      const client = mqtt.connect(bUrl, {
        clientId: CLIENT_ID,
        clean: true,
        connectTimeout: 5000,
        reconnectPeriod: 6000
      });

      client.on('connect', () => {
        updateSyncStatusUI('online', `☁️ ${currentRoomId}`);
        client.subscribe(topic);
      });

      client.on('message', (t, msg) => {
        try {
          const payload = JSON.parse(msg.toString());
          applyIncomingCloudData(payload);
        } catch (e) {}
      });

      mqttClients.push(client);
    } catch (e) {}
  });
}

function publishCloudState(syncMeta = { station: 'pantry_coffee', msg: 'Đồng bộ văn phòng' }) {
  if (!mqttClients.length) return;
  const topic = `lifetown3d/room/${currentRoomId}/sync`;
  const msgId = 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
  seenMsgIds.add(msgId);

  const payload = JSON.stringify({
    clientId: CLIENT_ID,
    msgId,
    timestamp: Date.now(),
    station: syncMeta.station || 'pantry_coffee',
    msg: syncMeta.msg || '',
    data: state
  });

  mqttClients.forEach(c => {
    try {
      if (c && c.connected) c.publish(topic, payload);
    } catch (e) {}
  });
}

function applyIncomingCloudData(payload) {
  if (!payload || !payload.data) return;
  if (payload.clientId === CLIENT_ID) return;
  if (payload.msgId) {
    if (seenMsgIds.has(payload.msgId)) return;
    seenMsgIds.add(payload.msgId);
  }

  state = Object.assign({}, DEFAULT_STATE, payload.data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  updateWorldBadges();
  updateTopSummary();
  renderInspector();

  if (payload.msg) {
    showToast(`☁️ Đồng nghiệp vừa cập nhật: ${payload.msg}`);
  }
}

// ============================================================================
// RAYCASTING & BẮT SỰ KIỆN CLICK VÀO ĐỐI TƯỢNG 3D
// ============================================================================
function onCanvasClick(e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(hitboxes);

  if (intersects.length > 0) {
    const stationId = intersects[0].object.userData.stationId;
    if (stationId) {
      selectStation(stationId, true);
    }
  }
}
window.addEventListener('click', onCanvasClick);

// ============================================================================
// GẮN SỰ KIỆN NÚT BẤM GIAO DIỆN (UI EVENT LISTENERS)
// ============================================================================
document.getElementById('btn-role-thanh').addEventListener('click', () => setPersonaView('thanh'));
document.getElementById('btn-role-nene').addEventListener('click', () => setPersonaView('nene'));
document.getElementById('btn-role-all').addEventListener('click', () => setPersonaView('all'));

document.getElementById('btn-theme').addEventListener('click', toggleDayNight);
document.getElementById('btn-coffee-break').addEventListener('click', triggerCoffeeBreak);
document.getElementById('btn-trigger-celebration').addEventListener('click', () => {
  triggerMegaCelebration('🎉 ĐẠI TIỆC VĂN PHÒNG! CHÚC HAI BẠN MỘT NGÀY LÀM VIỆC ĐẠT NĂNG SUẤT CAO! 🎉');
});

const btnRotate = document.getElementById('btn-rotate');
btnRotate.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  btnRotate.classList.toggle('active', controls.autoRotate);
  btnRotate.textContent = controls.autoRotate ? '🔄 Đang xoay' : '⏸️ Đã dừng xoay';
});

const btnToggleLabels = document.getElementById('btn-toggle-labels');
let labelsVisible = true;
btnToggleLabels.addEventListener('click', () => {
  labelsVisible = !labelsVisible;
  const c = document.getElementById('labels-container');
  if (c) c.style.display = labelsVisible ? 'block' : 'none';
  btnToggleLabels.textContent = labelsVisible ? '🏷️ Ẩn Chữ' : '🏷️ Hiện Chữ';
});

document.getElementById('btn-close-inspector').addEventListener('click', () => {
  document.getElementById('inspector-card').classList.add('collapsed');
});

// Dock bar navigation buttons
document.querySelectorAll('.dock-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const sId = btn.dataset.station;
    if (sId) selectStation(sId, true);
  });
});

// Modal Đồng bộ
const syncModal = document.getElementById('sync-modal');
document.getElementById('btn-open-sync').addEventListener('click', () => {
  if (syncModal) syncModal.classList.remove('hidden');
});
document.getElementById('btn-close-sync').addEventListener('click', () => {
  if (syncModal) syncModal.classList.add('hidden');
});
document.getElementById('btn-copy-edit').addEventListener('click', () => {
  const el = document.getElementById('input-share-edit');
  if (el) {
    navigator.clipboard.writeText(el.value).then(() => showToast('📋 Đã copy link văn phòng!'));
  }
});
document.getElementById('btn-apply-room').addEventListener('click', () => {
  const input = document.getElementById('input-room-id');
  const val = input ? input.value.trim() : '';
  if (val && val !== currentRoomId) {
    currentRoomId = val;
    localStorage.setItem(ROOM_KEY, val);
    connectRealtimeCloud();
    buildShareLinks();
    showToast(`🔄 Đã đổi sang phòng ${val}!`);
    if (syncModal) syncModal.classList.add('hidden');
  }
});
document.getElementById('btn-force-push').addEventListener('click', () => {
  publishCloudState({ station: 'pantry_coffee', msg: 'Đẩy dữ liệu văn phòng' });
  showToast('📤 Đã đẩy toàn bộ dữ liệu văn phòng lên Cloud!');
});
document.getElementById('btn-lock-room').addEventListener('click', () => {
  localStorage.removeItem(UNLOCKED_KEY);
  if (lockModal) {
    lockModal.classList.remove('hidden');
    lockModal.style.display = 'flex';
  }
  if (syncModal) syncModal.classList.add('hidden');
});

window.exportJsonFile = function() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `LifeOffice_Backup_${Date.now()}.json`);
  dlAnchor.click();
  dlAnchor.remove();
  showToast('💾 Đã xuất file backup dữ liệu thành công!');
};

// ============================================================================
// CẬP NHẬT TỌA ĐỘ NHÃN 3D THEO GÓC NHÌN CAMERA
// ============================================================================
const tempVec = new THREE.Vector3();

function updateWorldLabelsProjection() {
  if (!labelsVisible) return;

  Object.keys(OFFICE_STATIONS).forEach(stationId => {
    const el = worldLabelElements[stationId];
    const st = OFFICE_STATIONS[stationId];
    if (!el || !st) return;

    tempVec.set(st.pos.x, st.labelHeight, st.pos.z);
    tempVec.project(camera);

    if (tempVec.z > 1) {
      el.style.display = 'none';
      return;
    }

    const x = (tempVec.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-(tempVec.y * 0.5) + 0.5) * window.innerHeight;

    el.style.display = 'flex';
    el.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`;
  });
}

// ============================================================================
// VÒNG LẶP RENDER CHÍNH (ANIMATION LOOP)
// ============================================================================
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);
  const elapsed = clock.getElapsedTime();

  controls.update();

  // Animation lắc lư của các nhân vật Animal Crossing
  animatedObjects.forEach(item => {
    if (item.obj) {
      item.obj.rotation.y = item.baseRotY + Math.sin(elapsed * item.speed) * item.range;
    }
  });

  // Camera bay mượt mà đến trạm được chọn
  if (camTarget && controlsTarget) {
    camLerpFactor = Math.min(camLerpFactor + dt * 2.2, 1);
    camera.position.lerp(camTarget, 0.08);
    controls.target.lerp(controlsTarget, 0.08);

    if (camLerpFactor >= 1 && camera.position.distanceTo(camTarget) < 0.1) {
      camTarget = null;
      controlsTarget = null;
    }
  }

  // Cập nhật hạt confetti ăn mừng
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const cp = confettiParticles[i];
    cp.life -= dt;
    if (cp.life <= 0) {
      scene.remove(cp.mesh);
      confettiParticles.splice(i, 1);
      continue;
    }
    cp.vel.y -= 9.8 * dt * 0.45; // Trọng lực nhẹ rơi lơ lửng
    cp.mesh.position.addScaledVector(cp.vel, dt);
    cp.mesh.rotation.x += cp.rotSpeed.x * dt;
    cp.mesh.rotation.y += cp.rotSpeed.y * dt;
    cp.mesh.rotation.z += cp.rotSpeed.z * dt;
  }

  updateWorldLabelsProjection();
  renderer.render(scene, camera);
}

// Khởi chạy toàn bộ không gian văn phòng
function init() {
  buildOfficeArchitecture();
  buildVendingAndWaterDispenser();
  buildPantryCoffeeStation();
  buildCorkBulletinBoard();
  buildFileCabinet();
  buildWallDashboard();
  buildWorkstations();
  buildAnimalCrossingVillagers();
  buildOfficeAccessories();

  updateWorldBadges();
  updateTopSummary();
  selectStation('pantry_coffee', false);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
}

init();
