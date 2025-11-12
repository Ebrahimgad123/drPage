/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
