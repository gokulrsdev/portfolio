/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // This allows the build to finish even if there are lint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;