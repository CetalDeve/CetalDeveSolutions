# PowerShell Build Script for Cetal Deve Solutions

Write-Host "Building Cetal Deve Solutions for Docker deployment..." -ForegroundColor Cyan

# Step 1: Build the Next.js static export
Write-Host "Building Next.js static export..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install failed" -ForegroundColor Red
    exit 1
}

npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "npm build failed" -ForegroundColor Red
    exit 1
}

# Check if build was successful
if (-not (Test-Path "out")) {
    Write-Host "Build failed - 'out' directory not found" -ForegroundColor Red
    exit 1
}

Write-Host "Static export completed successfully" -ForegroundColor Green

# Step 2: Build Docker image
Write-Host "Building Docker image..." -ForegroundColor Yellow
docker build -t cetal-deve-solutions .

if ($LASTEXITCODE -eq 0) {
    Write-Host "Docker image built successfully" -ForegroundColor Green
    Write-Host ""
    Write-Host "Ready to deploy!" -ForegroundColor Cyan
    Write-Host "Run: docker run -p 80:80 cetal-deve-solutions" -ForegroundColor White
    Write-Host "Or:  docker-compose up cetal-website" -ForegroundColor White
} else {
    Write-Host "Docker build failed" -ForegroundColor Red
    exit 1
}
