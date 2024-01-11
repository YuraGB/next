import { NextRequestWithAuth } from 'next-auth/middleware'
import { i18nRouter } from 'next-i18n-router'
import { NextResponse } from 'next/server'
import i18nConfig from '@/../i18nConfig'
import { getToken } from 'next-auth/jwt'

export default async function middleware(request: NextRequestWithAuth) {
  const token = await getToken({ req: request })
  const locale = request.nextUrl.locale || 'en'

  request.nextauth = request.nextauth || {}
  request.nextauth.token = token

  if (
    request.nextUrl.pathname.includes('/admin') &&
    request.nextauth.token?.role.toLowerCase() !== 'admin'
  ) {
    return NextResponse.rewrite(
      new URL(`/${locale}/denied`, request.nextUrl.origin)
    )
  }
  return i18nRouter(request, i18nConfig)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api).*)',
    // Optional: only run on root (/) URL
    // '/admin',
  ],
}
