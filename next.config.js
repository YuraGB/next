/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  // experimental: {
  //   ppr: true,
  // },
  images: {
    domains: ['firebasestorage.googleapis.com', 'www.firstbenefits.org'],
  },
}

module.exports = nextConfig
