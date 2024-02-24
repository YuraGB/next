/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   ppr: true,
  // },
  env: {
    NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
    NEXT_PUBLIC_RE_SEND_FROM_DOMAIN: process.env.NEXT_PUBLIC_RE_SEND_FROM_DOMAIN,
  },
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
