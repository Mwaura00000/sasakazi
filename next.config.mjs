/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'eldohub.co.ke',
      },
    ],
  },
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
