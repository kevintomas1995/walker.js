/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com'],
  },
}

module.exports = nextConfig
