import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import HomePageIntro from '@/modules/homePageIntro'
// import { create } from '@/app/create'
const HomePageSlider = dynamic(() => import('@/modules/homePageSlider'))

export const metadata: Metadata = {
  title: 'Gyb Nextjs Home Page',
  description: 'testing Nextjs 14 with all features',
}

export const runtime = 'edge'
export const preferredRegion = ['fra1']

export default function Home() {
  // create()
  return (
    <PageWrapper>
      <Suspense fallback={<p>Loading...</p>}>
        <HomePageSlider />
      </Suspense>
      <HomePageIntro />
    </PageWrapper>
  )
}
