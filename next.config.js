/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // 👇 ADD THESE TWO LINES
  basePath: '/muhsinbinirshad.github.io',
  assetPrefix: '/muhsinbinirshad.github.io/',
};

module.exports = nextConfig;
