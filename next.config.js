/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "localhost:3001",
      "taka-blog-api-6079246b73b1.herokuapp.com",
    ],
  },
};

module.exports = nextConfig;
