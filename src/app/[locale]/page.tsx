import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React from 'react'
import HomePageIntro from '@/modules/homePageIntro'
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
      <HomePageIntro />
    </PageWrapper>
  )
}
