import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
const HomePageSlider = dynamic(() => import('@/modules/homePageSlider'))

export const metadata: Metadata = {
  title: 'Gyb Nextjs Home Page',
  description: 'testing Nextjs 14 with all features',
}

export default function Home() {
  return (
    <PageWrapper>
      <h1>Home</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <HomePageSlider />
      </Suspense>
    </PageWrapper>
  )
}
