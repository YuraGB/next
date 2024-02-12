/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   ppr: true,
  // },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // async headers() {
  //   const headers = []
  //   if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
  //     headers.push({
  //       headers: [
  //         {
  //           key: 'X-Robots-Tag',
  //           value: 'noindex, nofollow, nosnippet, noarchive, noimageindex',
  //         },
  //       ],
  //       source: '/:path*',
  //     })
  //   }
  //   return headers
  // },
};

module.exports = nextConfig;
