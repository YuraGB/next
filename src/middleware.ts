import { NextRequestWithAuth } from 'next-auth/middleware'
import { i18nRouter } from 'next-i18n-router'
import { NextResponse } from 'next/server'
import i18nConfig from '@/../i18nConfig'

export default function middleware(request: NextRequestWithAuth) {
  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    request.nextauth.token?.role.toLowerCase() !== 'admin'
  ) {
    return NextResponse.rewrite(new URL('/denied', request.url))
  }

  return i18nRouter(request, i18nConfig)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
