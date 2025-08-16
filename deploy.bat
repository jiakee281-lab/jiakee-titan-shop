@echo off
echo ========================================
echo    TITAN E-COMMERCE DEPLOYMENT
echo ========================================
echo.

echo Step 1: Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Step 2: Building the project...
npm run build
if %errorlevel% neq 0 (
    echo Error: Failed to build project
    pause
    exit /b 1
)

echo.
echo ========================================
echo           BUILD SUCCESSFUL!
echo ========================================
echo.
echo Next steps:
echo 1. Create GitHub repository: titan-ecommerce
echo 2. Push code to GitHub
echo 3. Deploy to Vercel.com
echo 4. Set up custom domain
echo 5. Submit to Google Search Console
echo.
echo See DEPLOYMENT_GUIDE.md for detailed instructions
echo.
pause
