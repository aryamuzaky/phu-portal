import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Nonaktifkan turbopack sepenuhnya
  experimental: {
    turbo: {
      rules: {}, // pastikan kosong
    },
  },
  webpack: (config) => {
    // Hindari error 'fs not found'
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
        path: false,
        os: false,
      },
    };
    return config;
  },
};

export default nextConfig;
