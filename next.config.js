/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    ppr: true,
  },
}

module.exports = nextConfig
