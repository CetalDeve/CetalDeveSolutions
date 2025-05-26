
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CetalDeveSolutions' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/CetalDeveSolutions' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
