import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
import HomePageSlider from '@/modules/homePageSlider'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Home Page',
  description: 'testing Nextjs 14 with all features',
}

export default function Home(): React.ReactNode {
  return (
    <PageWrapper>
      <h1>Home</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <HomePageSlider />
      </Suspense>
    </PageWrapper>
  )
}
