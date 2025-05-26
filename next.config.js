
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ConsultingSite' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ConsultingSite' : '',
};

module.exports = nextConfig;
