/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MY_VARIABLE: process.env.MY_VARIABLE,
    SITE_URL:process.env.SITE_URL,
    USOS_CONSUMER_KEY: process.env.USOS_CONSUMER_KEY,
    USOS_CONSUMER_SECRET: process.env.USOS_CONSUMER_SECRET,
    USOS_BASE_URL: process.env.USOS_BASE_URL
  },
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
    ],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
