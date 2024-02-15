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
    remotePatterns: [
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
