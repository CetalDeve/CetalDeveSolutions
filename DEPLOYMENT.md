# Deployment Guide for Cetal Deve Solutions

This document provides comprehensive instructions for deploying the Cetal Deve Solutions website to iPage hosting using Docker and GitHub Actions.

## 🚀 Deployment Options

### Option 1: Automated GitHub Actions Deployment (Recommended)

1. **Setup Repository Secrets**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add the following secrets:
     ```
     FTP_SERVER=your-ipage-ftp-server.com
     FTP_USERNAME=your-ftp-username
     FTP_PASSWORD=your-ftp-password
     ```

2. **Push to Main Branch**
   - The deployment will automatically trigger when you push to the `main` or `master` branch
   - Monitor the deployment in the "Actions" tab of your GitHub repository

### Option 2: Manual Deployment with Scripts

#### Windows (PowerShell)
```powershell
# Set environment variables (optional for FTP deployment)
$env:FTP_SERVER="your-ipage-ftp-server.com"
$env:FTP_USERNAME="your-ftp-username"
$env:FTP_PASSWORD="your-ftp-password"

# Run deployment script
.\deploy.ps1
```

#### Linux/macOS (Bash)
```bash
# Set environment variables (optional for FTP deployment)
export FTP_SERVER="your-ipage-ftp-server.com"
export FTP_USERNAME="your-ftp-username"
export FTP_PASSWORD="your-ftp-password"

# Make script executable and run
chmod +x deploy.sh
./deploy.sh
```

### Option 3: Docker Deployment

#### Build and Test Locally
```bash
# Build the Docker image
docker build -t cetal-deve-solutions .

# Run locally for testing
docker run -p 8080:80 cetal-deve-solutions

# Or use Docker Compose
docker-compose up prod
```

#### Deploy to Production
```bash
# Build for production
docker-compose run build

# The static files will be in the ./out directory
# Upload these files to your iPage hosting account
```

## 📁 Manual File Upload

If you prefer manual deployment:

1. **Build the application:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload files:**
   - Navigate to the `out/` directory
   - Upload all contents to your iPage `public_html` or `htdocs` directory
   - Ensure the file structure is preserved

## 🌐 iPage Hosting Setup

### Getting Your FTP Credentials

1. **Login to iPage Control Panel**
   - Go to your iPage account dashboard
   - Navigate to "FTP Accounts" or "File Manager"

2. **FTP Server Information**
   - **Server:** Usually `ftp.yourdomain.com` or `yoursite.ipage.com`
   - **Username:** Your iPage FTP username
   - **Password:** Your iPage FTP password
   - **Port:** 21 (standard FTP)

### File Upload Location

- Upload files to: `/public_html/` or `/htdocs/`
- Ensure index.html is in the root directory

## 🔧 Configuration Files

### next.config.js
The configuration has been updated for static export:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

### Dockerfile
Multi-stage Docker build optimized for production:
- Development dependencies separated from production
- Nginx serving static files
- Optimized for small image size

### GitHub Actions Workflow
- Automated testing and building
- FTP deployment to iPage
- Artifact storage for manual deployment

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf .next out node_modules package-lock.json
   npm install
   npm run build
   ```

2. **FTP Connection Issues**
   - Verify FTP credentials
   - Check if passive mode is required
   - Ensure port 21 is not blocked

3. **Missing Files on Production**
   - Verify all files were uploaded
   - Check file permissions (755 for directories, 644 for files)
   - Ensure index.html exists in root directory

4. **404 Errors on Page Refresh**
   - This is normal for static sites with client-side routing
   - The site is configured to handle this automatically

### Logs and Debugging

1. **GitHub Actions Logs**
   - Check the Actions tab in your repository
   - Review build and deployment logs

2. **Local Testing**
   ```bash
   # Test the production build locally
   npm run build
   npx serve out
   ```

3. **Docker Logs**
   ```bash
   # Check container logs
   docker logs container-name
   ```

## 📋 Pre-deployment Checklist

- [ ] Repository secrets configured (if using GitHub Actions)
- [ ] FTP credentials tested
- [ ] Build completes successfully locally
- [ ] All environment variables set
- [ ] Domain DNS pointing to iPage servers
- [ ] SSL certificate configured (if needed)

## 🔄 Updating the Site

1. **Make changes to your code**
2. **Commit and push to main branch** (triggers auto-deployment)
3. **Or run deployment script manually**

## 📞 Support

For iPage-specific hosting questions:
- iPage Support: https://www.ipage.com/help/
- iPage Knowledge Base: Available in your control panel

For application issues:
- Check GitHub Issues
- Review deployment logs
- Test locally first

## 🚀 Performance Optimization

The site is optimized for performance with:
- Static file generation
- Gzip compression (via Nginx)
- Image optimization
- CSS and JS minification
- Cache headers for static assets

---

**Note:** This deployment configuration creates a static version of your Next.js site, which is perfect for hosting providers like iPage that specialize in static/shared hosting.
