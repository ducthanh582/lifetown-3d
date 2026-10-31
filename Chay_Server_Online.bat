@echo off
chcp 65001 >nul
title LifeTown 3D - Live Server & Public Web Tunnel
cd /d "%~dp0"

echo ======================================================================
echo   DANG KHOI DONG SERVER REAL-TIME LIFETOWN 3D (PORT 8080)...
echo   - Tu dong dong bo Task / Lich / Ngan sach tuc thi (Khong can F5!)
echo   - Tu dong cap nhat Web ngay khi sua code tren may tinh!
echo ======================================================================

REM Khoi dong Python Server ngam
start "LifeTown3D_LocalServer" /min python server.py

timeout /t 2 >nul
start "" "http://localhost:8080"

echo.
echo ======================================================================
echo   DANG TAO DUONG LINK INTERNET CONG KHAI (PUBLIC HTTPS LINK)...
echo   Hay copy duong link https://....lhr.life hien ra ben duoi
echo   de gui cho nguoi khac truy cap truc tiep vao may cua ban!
echo ======================================================================
echo.

ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -R 80:localhost:8080 nokey@localhost.run
pause
