const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Remove assetPrefix and basePath for custom domain deployment
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