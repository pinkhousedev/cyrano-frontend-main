// next.config.ts
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cyrano-pamphlet-backend-2b44.onrender.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'figma-backend-ehsr.onrender.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cyrano-pamphlet-backend-cyiq.onrender.com',
        pathname: '/**',
      },
      // Allow local Strapi media in development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(__dirname, "."),
    };
    return config;
  },
};

export default nextConfig;
