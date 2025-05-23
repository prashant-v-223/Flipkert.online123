/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
