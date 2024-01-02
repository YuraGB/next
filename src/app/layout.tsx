import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '@/app/context/AuthProvider'
import NextUiProviderComponent from '@/app/context/NextUiProviderComponent'
import React from 'react'
import dynamic from 'next/dynamic'
import { SpeedInsights } from '@vercel/speed-insights/next'
const Navigation = dynamic(() => import('@/modules/navigation/Navigation'))

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextUiProviderComponent>
          <AuthProvider>
            <Navigation />
            {children}
          </AuthProvider>
        </NextUiProviderComponent>
        <SpeedInsights />
      </body>
    </html>
  )
}
