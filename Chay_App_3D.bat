@echo off
chcp 65001 >nul
cd /d "%~dp0"

REM Kiem tra neu server.py chua chay thi khoi dong ngam
curl -s http://localhost:8080/api/version >nul 2>nul
if %errorlevel% neq 0 (
    start "LifeTown3D_Server" /min python server.py
    timeout /t 1 >nul
)

where msedge >nul 2>nul
if %errorlevel%==0 (
    start "" msedge --app="http://localhost:8080"
) else (
    start "" "http://localhost:8080"
)
exit
