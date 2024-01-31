import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React from 'react'
import HomePageIntro from '@/modules/homePageIntro'

export const metadata: Metadata = {
  title: 'Fairy Tales Catalog Home page',
  description: 'Introduction to the Fairy Tales Website',
  keywords: ['fairy tales', 'home page'],
}

export const preferredRegion = ['fra1']

export default function Home() {
  return (
    <>
      <PageWrapper>
        <HomePageIntro />
      </PageWrapper>
    </>
  )
}
