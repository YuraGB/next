import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React from 'react'
import HomePageIntro from '@/modules/homePageIntro'
import HomePageSlider from '@/modules/homePageSlider'
import BackgroundSwithcer from '@/components/BackgroundSwitcher/BackgroundSwithcer'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Home Page',
  description: 'testing Nextjs 14 with all features',
}

export const preferredRegion = ['fra1']

export default function Home() {
  return (
    <>
      <BackgroundSwithcer />
      <PageWrapper>
        <HomePageSlider />
        <HomePageIntro />
      </PageWrapper>
    </>
  )
}
