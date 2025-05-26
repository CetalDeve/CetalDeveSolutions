const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CetalDeveSolutions' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/CetalDeveSolutions' : '',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;