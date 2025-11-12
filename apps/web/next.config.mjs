import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  turbopack: {},
  experimental: {
    turbo: {
      resolveAlias: {
        '@ui': path.resolve(__dirname, '../../packages/ui/src'),
        '@api-client': path.resolve(__dirname, '../../packages/api-client/src'),
        '@config': path.resolve(__dirname, '../../packages/config/src'),
      },
    },
  },
};

export default nextConfig;
