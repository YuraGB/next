import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { i18nRouter } from 'next-i18n-router'
import { NextResponse } from 'next/server'
import i18nConfig from '@/../i18nConfig'

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log(request)
    if (
      request.nextUrl.pathname.startsWith('/admin') &&
      request.nextauth.token?.role.toLowerCase() !== 'admin'
    ) {
      return NextResponse.rewrite(new URL('/denied', request.url))
    }
    console.log(request)
    //  return i18nRouter(request, i18nConfig)
  },
  {
    callbacks: { authorized: ({ token }) => !!token },
  }
)

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
