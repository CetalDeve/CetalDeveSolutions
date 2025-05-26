#!/bin/bash
# Simple Docker Build Script for Cetal Deve Solutions

echo "🚀 Building Cetal Deve Solutions for Docker deployment..."

# Step 1: Build the Next.js static export
echo "📦 Building Next.js static export..."
npm install
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed - 'out' directory not found"
    exit 1
fi

echo "✅ Static export completed successfully"

# Step 2: Build Docker image
echo "🐳 Building Docker image..."
docker build -t cetal-deve-solutions .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully"
    echo ""
    echo "🎉 Ready to deploy!"
    echo "Run: docker run -p 80:80 cetal-deve-solutions"
    echo "Or:  docker-compose up cetal-website"
else
    echo "❌ Docker build failed"
    exit 1
fi
