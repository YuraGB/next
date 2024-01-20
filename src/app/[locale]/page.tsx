import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
const HomePageIntro = dynamic(() => import('@/modules/homePageIntro'))
const HomePageSlider = dynamic(() => import('@/modules/homePageSlider'))

export const metadata: Metadata = {
  title: 'Gyb Nextjs Home Page',
  description: 'testing Nextjs 14 with all features',
}

export const preferredRegion = ['fra1']

export default function Home() {
  return (
    <PageWrapper>
      <Suspense fallback={<p>Loading...</p>}>
        <HomePageSlider />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <HomePageIntro />
      </Suspense>
    </PageWrapper>
  )
}
