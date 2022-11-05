
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  theme: {
    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
  },
  images: {
    deviceSizes: [380, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
};

module.exports = ( nextConfig );
