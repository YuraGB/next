import React, { ReactNode } from 'react'
import type { Metadata } from 'next'

import { SpeedInsights } from '@vercel/speed-insights/next'
import ReactQueryProvider from '@/context/ReactQueryProvider'
import AuthProvider from '@/context/AuthProvider'
import NextUiProviderComponent from '@/context/NextUiProviderComponent'

import './globals.css'

import dynamic from 'next/dynamic'
import ServerIntlProvider from '@/context/i18nProvider'
import getIntl from '@/utils/intl'
const Navigation = dynamic(() => import('@/modules/navigation/Navigation'))
const Footer = dynamic(() => import('@/modules/footer'))

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const intl = await getIntl(params.locale)
  // console.log(params, intl)
  return (
    <html lang={intl.locale}>
      <body
        className={
          'min-h-[100dvh] flex flex-col [&>div]:min-h-[100dvh] [&>div]:flex [&>div]:flex-col'
        }
      >
        <NextUiProviderComponent>
          <ReactQueryProvider>
            <AuthProvider>
              <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
                <Navigation />
                {children}
              </ServerIntlProvider>
            </AuthProvider>
          </ReactQueryProvider>
          <Footer />
        </NextUiProviderComponent>
        <SpeedInsights />
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  const locales = ['en', 'uk']

  return locales.map((locale) => ({ locale }))
}

export const revalidate = 60
