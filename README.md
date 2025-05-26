# Cetal Deve Solutions - Modern Consulting Website

A modern, responsive consulting website built with Next.js, featuring a clean design optimized for static hosting.

## 🚀 Features

- **Modern Design**: Clean, professional layout perfect for consulting firms
- **Static Export**: Optimized for hosting on platforms like iPage
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized images and assets
- **Blog System**: Built-in blog functionality with MDX support
- **Contact Forms**: Integrated contact and subscription forms
- **SEO Friendly**: Optimized for search engines

## 🛠️ Technology Stack

- **Framework**: Next.js 13+
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts
- **Deployment**: Static export for universal hosting

## 🏁 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CetalDeve/CetalDeveSolutions.git
   cd CetalDeveSolutions
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Generate static export
- `npm run build-static` - Build and export as static files

## 🚀 Deployment

This project is configured for static export and can be deployed to any hosting provider:

### Quick Deploy (iPage/Static Hosting)
```bash
npm run build-static
# Upload contents of 'out' folder to your hosting provider
```

### Detailed Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) and [DEPLOYMENT_INSTRUCTIONS.md](./DEPLOYMENT_INSTRUCTIONS.md) for comprehensive deployment guides.

## 📁 Project Structure

```
├── pages/              # Next.js pages
├── components/         # React components
├── public/            # Static assets
├── styles/            # CSS styles
├── articles/          # Blog posts (MDX)
├── out/              # Static export output
└── deploy/           # Deployment package
```

## 🎨 Customization

- **Styling**: Modify `tailwind.config.js` and CSS files in `styles/`
- **Content**: Update component files and add blog posts in `articles/`
- **Images**: Replace logos and images in `public/` directory
- **Configuration**: Adjust settings in `next.config.js`

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the deployment documentation
- Review the troubleshooting section in DEPLOYMENT.md
