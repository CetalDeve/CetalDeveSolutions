# Simple Docker Deployment Guide

## 🐳 Docker Deployment for Cetal Deve Solutions

This guide provides a simple Docker deployment solution for the Cetal Deve Solutions website.

## 📋 Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## 🚀 Quick Deployment

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and run the production container
docker-compose up cetal-website

# Run in background
docker-compose up -d cetal-website
```

### Option 2: Manual Docker Commands

```bash
# 1. Build the static export
npm install
npm run build

# 2. Build Docker image
docker build -t cetal-deve-solutions .

# 3. Run the container
docker run -p 80:80 cetal-deve-solutions

# Run in background
docker run -d -p 80:80 --name cetal-website cetal-deve-solutions
```

### Option 3: Using Build Scripts

**Windows (PowerShell):**
```powershell
.\docker-build.ps1
docker run -p 80:80 cetal-deve-solutions
```

**Linux/macOS:**
```bash
chmod +x docker-build.sh
./docker-build.sh
docker run -p 80:80 cetal-deve-solutions
```

## 🌐 Accessing Your Website

After deployment, your website will be available at:
- **Local**: http://localhost
- **Server**: http://YOUR_SERVER_IP

## 🛠️ Management Commands

### Start/Stop Container
```bash
# Start
docker start cetal-website

# Stop
docker stop cetal-website

# Restart
docker restart cetal-website
```

### View Logs
```bash
# View logs
docker logs cetal-website

# Follow logs
docker logs -f cetal-website
```

### Update Deployment
```bash
# 1. Stop current container
docker stop cetal-website
docker rm cetal-website

# 2. Rebuild with latest changes
npm run build
docker build -t cetal-deve-solutions .

# 3. Start new container
docker run -d -p 80:80 --name cetal-website cetal-deve-solutions
```

## 🏗️ Architecture

- **Base Image**: nginx:alpine (lightweight)
- **Static Files**: Served directly by Nginx
- **Port**: 80 (HTTP)
- **Size**: ~15MB (optimized for production)

## 🔧 Customization

### Changing Port
```bash
# Run on different port (e.g., 8080)
docker run -p 8080:80 cetal-deve-solutions
```

### Environment Variables
```bash
# Set custom variables (if needed)
docker run -p 80:80 -e NODE_ENV=production cetal-deve-solutions
```

## 📊 Container Information

```bash
# View container stats
docker stats cetal-website

# View container details
docker inspect cetal-website

# View image information
docker images cetal-deve-solutions
```

## 🔄 Development Workflow

For development with Docker:

```bash
# Start development container
docker-compose up dev

# Access at http://localhost:3000
```

## 🐛 Troubleshooting

### Container Won't Start
```bash
# Check logs
docker logs cetal-website

# Check if port is already in use
netstat -an | grep :80
```

### Build Issues
```bash
# Clean Docker cache
docker system prune

# Rebuild without cache
docker build --no-cache -t cetal-deve-solutions .
```

### File Permission Issues
```bash
# Ensure files are readable
chmod -R 755 ./out
```

## 📁 Files Overview

- `Dockerfile` - Simple single-stage Docker configuration
- `docker-compose.yml` - Docker Compose setup
- `docker-build.ps1` - Windows build script
- `docker-build.sh` - Linux/macOS build script

## 🎯 Production Deployment

For production servers:

1. **Copy files to server**
2. **Run build script**
3. **Start container**
4. **Configure reverse proxy (if needed)**

Example with reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## ✅ Benefits of This Approach

- ✅ **Simple**: Single Dockerfile, minimal configuration
- ✅ **Fast**: Nginx serves static files efficiently
- ✅ **Lightweight**: Small container size (~15MB)
- ✅ **Portable**: Runs anywhere Docker is supported
- ✅ **Scalable**: Easy to scale horizontally
- ✅ **Secure**: Minimal attack surface with static files

Your website is now ready for Docker deployment! 🚀
