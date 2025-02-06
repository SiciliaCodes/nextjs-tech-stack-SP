import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a-/**',
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
        port: '',
        pathname: '/**',
      },
      // Add additional patterns for portfolio images if needed
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.githubusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // Add any experimental features if needed
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [],
  },
  // Add typescript path aliases if needed
  webpack(config) {
    return config;
  },
};

export default nextConfig;