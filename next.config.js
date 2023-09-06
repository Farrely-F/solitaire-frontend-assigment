/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["reqres.in", "aroosand.sirv.com", "sltr.id"], // Add your domain here
  },
};

module.exports = nextConfig;
