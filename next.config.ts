import type { NextConfig } from 'next';

import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    localPatterns: [
      {
        pathname: 'src/assets/images/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hardwaremarket.net',
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
};

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');
const nextIntlConfig = withNextIntl(nextConfig);

export default nextIntlConfig;
