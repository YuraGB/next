import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
const HomePageIntro = dynamic(() => import('@/modules/homePageIntro'))
import HomePageSlider from '@/modules/homePageSlider'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Home Page',
  description: 'testing Nextjs 14 with all features',
}

export const preferredRegion = ['fra1']

export default function Home() {
  return (
    <PageWrapper>
      <HomePageSlider />
      <Suspense
        fallback={<section style={{ height: '840px', width: '100%' }} />}
      >
        <HomePageIntro />
      </Suspense>
    </PageWrapper>
  )
}
