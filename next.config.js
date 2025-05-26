
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CetalDeveSolutions' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/CetalDeveSolutions' : '',
};

module.exports = nextConfig;
