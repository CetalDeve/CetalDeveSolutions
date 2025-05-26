# PowerShell Deployment Script for Cetal Deve Solutions
# This script builds and deploys the Next.js application on Windows

param(
    [switch]$SkipBuild,
    [switch]$SkipDeploy,
    [string]$FtpServer = $env:FTP_SERVER,
    [string]$FtpUsername = $env:FTP_USERNAME,
    [string]$FtpPassword = $env:FTP_PASSWORD
)

# Configuration
$BuildDir = ".\out"
$DeployDir = ".\deploy"
$ZipFile = "cetal-deve-solutions-$(Get-Date -Format 'yyyyMMdd_HHmmss').zip"

# Functions for colored output
function Write-Success {
    param([string]$Message)
    Write-Host "✓ $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "⚠ $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "✗ $Message" -ForegroundColor Red
}

function Write-Info {
    param([string]$Message)
    Write-Host "ℹ $Message" -ForegroundColor Cyan
}

# Check dependencies
function Test-Dependencies {
    Write-Info "Checking dependencies..."
    
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        Write-Error "Node.js is not installed or not in PATH"
        exit 1
    }
    
    if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
        Write-Error "npm is not installed or not in PATH"
        exit 1
    }
    
    Write-Success "Dependencies check passed"
}

# Install npm dependencies
function Install-Dependencies {
    Write-Info "Installing npm dependencies..."
    
    try {
        npm ci --silent
        Write-Success "Dependencies installed successfully"
    }
    catch {
        Write-Error "Failed to install dependencies: $_"
        exit 1
    }
}

# Build application
function Build-Application {
    Write-Info "Building Next.js application..."
    
    # Set environment variables
    $env:NODE_ENV = "production"
    $env:NEXT_TELEMETRY_DISABLED = "1"
    
    # Clean previous builds
    if (Test-Path $BuildDir) {
        Remove-Item $BuildDir -Recurse -Force
    }
    if (Test-Path ".next") {
        Remove-Item ".next" -Recurse -Force
    }
    
    try {
        # Try static export first
        Write-Info "Attempting static export build..."
        $result = npm run build-static 2>&1
        
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "Static export failed, trying regular build..."
            # If static export fails, try regular build
            npm run build
            
            if ($LASTEXITCODE -ne 0) {
                Write-Error "Both build methods failed"
                Write-Error $result
                exit 1
            }
            
            # Copy .next/out to out directory if regular build succeeded
            if (Test-Path ".next\out") {
                Copy-Item ".next\out\*" $BuildDir -Recurse -Force
            } else {
                # If no out directory, copy static files from .next/static
                New-Item -ItemType Directory -Path $BuildDir -Force | Out-Null
                Copy-Item "public\*" $BuildDir -Recurse -Force -ErrorAction SilentlyContinue
                Write-Info "Created basic deployment structure"
            }
        }
        
        if (-not (Test-Path $BuildDir)) {
            Write-Error "Build failed - output directory not found"
            exit 1
        }
        
        Write-Success "Application built successfully"
    }
    catch {
        Write-Error "Build failed: $_"
        exit 1
    }
}

# Create deployment package
function New-DeploymentPackage {
    Write-Info "Creating deployment package..."
    
    # Clean and create deploy directory
    if (Test-Path $DeployDir) {
        Remove-Item $DeployDir -Recurse -Force
    }
    New-Item -ItemType Directory -Path $DeployDir -Force | Out-Null
    
    # Copy build files
    Copy-Item "$BuildDir\*" $DeployDir -Recurse
    
    # Create ZIP archive
    try {
        Compress-Archive -Path "$DeployDir\*" -DestinationPath $ZipFile -Force
        Write-Success "Deployment package created: $ZipFile"
    }
    catch {
        Write-Error "Failed to create deployment package: $_"
        exit 1
    }
}

# Deploy via FTP using WinSCP (if available)
function Deploy-Ftp {
    if (-not $FtpServer -or -not $FtpUsername -or -not $FtpPassword) {
        Write-Warning "FTP credentials not provided, skipping FTP deployment"
        Write-Warning "Set FTP_SERVER, FTP_USERNAME, and FTP_PASSWORD environment variables"
        return
    }
    
    Write-Info "Attempting FTP deployment..."
    
    # Check if WinSCP is available
    $winscp = Get-Command "WinSCP.exe" -ErrorAction SilentlyContinue
    if (-not $winscp) {
        Write-Warning "WinSCP not found. You can download it from https://winscp.net/"
        Write-Warning "Alternatively, upload files manually from: $DeployDir"
        return
    }
    
    try {
        # Create WinSCP script
        $scriptContent = @"
open ftp://$FtpUsername`:$FtpPassword@$FtpServer
synchronize remote $DeployDir /htdocs/
exit
"@
        
        $scriptFile = "deploy-script.txt"
        $scriptContent | Out-File -FilePath $scriptFile -Encoding utf8
        
        # Execute WinSCP
        & $winscp.Source /script=$scriptFile
        
        # Clean up script file
        Remove-Item $scriptFile -Force
        
        Write-Success "FTP deployment completed"
    }
    catch {
        Write-Error "FTP deployment failed: $_"
    }
}

# Show deployment summary
function Show-Summary {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host "          Deployment Summary" -ForegroundColor Cyan
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Success "Deployment process completed successfully!"
    Write-Info "Build artifacts are available in: $DeployDir"
    Write-Info "Deployment package: $ZipFile"
    Write-Host ""
    Write-Host "📁 Manual upload options:" -ForegroundColor Yellow
    Write-Host "   1. Upload contents of '$DeployDir' to your hosting provider" -ForegroundColor White
    Write-Host "   2. Upload and extract '$ZipFile' on your server" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 For iPage hosting:" -ForegroundColor Yellow
    Write-Host "   1. Login to your iPage control panel" -ForegroundColor White
    Write-Host "   2. Navigate to File Manager" -ForegroundColor White
    Write-Host "   3. Upload files to the public_html or htdocs directory" -ForegroundColor White
    Write-Host ""
}

# Main execution
try {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host "  Cetal Deve Solutions - Deployment Script" -ForegroundColor Cyan
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host ""
    
    Test-Dependencies
    
    if (-not $SkipBuild) {
        Install-Dependencies
        Build-Application
        New-DeploymentPackage
    }
    
    if (-not $SkipDeploy) {
        Deploy-Ftp
    }
    
    Show-Summary
}
catch {
    Write-Error "Deployment failed: $_"
    exit 1
}
finally {
    # Reset environment variables
    $env:NODE_ENV = $null
    $env:NEXT_TELEMETRY_DISABLED = $null
}
