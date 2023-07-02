/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
