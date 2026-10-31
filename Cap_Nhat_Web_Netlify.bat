@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ======================================================================
echo   DANG DAY CODE MOI LEN GITHUB ^& TU DONG CAP NHAT NETLIFY...
echo ======================================================================

git add .
git commit -m "Cap nhat giao dien va tinh nang LifeTown 3D"
git push -u origin main

echo.
echo ======================================================================
echo   HOAN TAT! Trang web Netlify cua ban se tu dong cap nhat sau ~10 giay
echo   ma GIU NGUYEN duong link cu va du lieu phong!
echo ======================================================================
pause
