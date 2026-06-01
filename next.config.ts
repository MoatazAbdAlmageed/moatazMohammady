import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'theqaed.com',
      },
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'camelcasetech.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nilebits.com',
      },
      {
        protocol: 'https',
        hostname: 'tie.sa',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shortpixel.ai',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fcai19-7.fna.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;
