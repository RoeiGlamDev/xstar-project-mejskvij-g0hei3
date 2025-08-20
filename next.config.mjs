import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    appDir: true, // Enables the app directory (if using Next.js 13)
  },
  webpack: (config) => {
    // Custom webpack configurations can be added here
    return config;
  },
  env: {
    // Environment variables can be added here
    HOUSEIL_API_URL: process.env.HOUSEIL_API_URL,
  },
};

export default nextConfig;