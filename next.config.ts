import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Matikan Turbopack, pakai Webpack
  experimental: {
    turbo: false,
  },

  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
