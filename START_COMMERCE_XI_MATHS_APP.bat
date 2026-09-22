@echo off
setlocal
set "APP_DIR=%~dp0"
set "NODE_EXE=%APP_DIR%..\Mohit_Exam_App\runtime\node.exe"
if not exist "%NODE_EXE%" (
  echo The bundled Node runtime was not found at: "%NODE_EXE%"
  echo Keep this folder beside Mohit_Exam_App, or install Node.js and run npm start.
  pause
  exit /b 1
)
start "Commerce XI Maths App Server" /min "%NODE_EXE%" "%APP_DIR%server.mjs"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4187"
endlocal
