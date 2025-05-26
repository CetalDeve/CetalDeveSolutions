#!/bin/bash

# Deployment script for Cetal Deve Solutions
# This script builds and deploys the Next.js application

set -e

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
BUILD_DIR="./out"
DEPLOY_DIR="./deploy"
ZIP_FILE="cetal-deve-solutions-$(date +%Y%m%d_%H%M%S).zip"

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    
    print_status "Dependencies check passed"
}

# Install dependencies
install_dependencies() {
    print_status "Installing npm dependencies..."
    npm ci --silent
    print_status "Dependencies installed successfully"
}

# Build the application
build_application() {
    print_status "Building Next.js application..."
    
    # Set production environment
    export NODE_ENV=production
    export NEXT_TELEMETRY_DISABLED=1
    
    # Clean previous builds
    rm -rf $BUILD_DIR
    rm -rf .next
    
    # Build the application
    npm run build
    
    if [ ! -d "$BUILD_DIR" ]; then
        print_error "Build failed - output directory not found"
        exit 1
    fi
    
    print_status "Application built successfully"
}

# Create deployment package
create_deployment_package() {
    print_status "Creating deployment package..."
    
    # Clean and create deploy directory
    rm -rf $DEPLOY_DIR
    mkdir -p $DEPLOY_DIR
    
    # Copy build files
    cp -r $BUILD_DIR/* $DEPLOY_DIR/
    
    # Create archive
    cd $DEPLOY_DIR
    zip -r ../$ZIP_FILE . > /dev/null
    cd ..
    
    print_status "Deployment package created: $ZIP_FILE"
}

# Deploy via FTP (requires environment variables)
deploy_ftp() {
    if [ -z "$FTP_SERVER" ] || [ -z "$FTP_USERNAME" ] || [ -z "$FTP_PASSWORD" ]; then
        print_warning "FTP credentials not provided, skipping FTP deployment"
        print_warning "Set FTP_SERVER, FTP_USERNAME, and FTP_PASSWORD environment variables"
        return 0
    fi
    
    print_status "Deploying via FTP..."
    
    # Install lftp if not available
    if ! command -v lftp &> /dev/null; then
        print_error "lftp is not installed. Install it to use FTP deployment."
        return 1
    fi
    
    # FTP deployment
    lftp -c "
        set ftp:ssl-allow no;
        set ssl:verify-certificate no;
        open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_SERVER;
        mirror -R $DEPLOY_DIR /htdocs/ --delete --verbose;
        quit
    "
    
    print_status "FTP deployment completed"
}

# Main deployment process
main() {
    echo "================================================"
    echo "  Cetal Deve Solutions - Deployment Script"
    echo "================================================"
    
    check_dependencies
    install_dependencies
    build_application
    create_deployment_package
    
    # Deploy if FTP credentials are available
    deploy_ftp
    
    echo ""
    print_status "Deployment process completed successfully!"
    print_status "Build artifacts are available in: $DEPLOY_DIR"
    print_status "Deployment package: $ZIP_FILE"
    echo ""
    echo "📁 You can manually upload the contents of '$DEPLOY_DIR' to your hosting provider"
    echo "📦 Or upload the zip file '$ZIP_FILE' and extract it on your server"
}

# Handle script interruption
trap 'print_error "Deployment interrupted"; exit 1' INT TERM

# Run main function
main "$@"
