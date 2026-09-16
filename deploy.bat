@echo off
cd /d "%~dp0"

echo Pulling latest changes...
git pull origin main
if errorlevel 1 (
    echo.
    echo Pull failed or had conflicts. Resolve manually before continuing.
    pause
    exit /b 1
)

echo.
echo Staging and committing changes...
git add .
git commit -m "update %date% %time%"
if errorlevel 1 (
    echo Nothing to commit.
) else (
    echo Pushing to GitHub...
    git push
)

echo.
echo Done.
pause