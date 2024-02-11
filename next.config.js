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
