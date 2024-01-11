import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React from 'react'

export const dynamicParams = true

export const metadata: Metadata = {
  title: 'Gyb Nextjs Features post Page',
  description: 'testing Nextjs 14 Features post page',
  keywords: ['yuhur', 'Features post page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function FeaturesPost({
  params,
}: {
  params: { id: string }
}): React.ReactNode {
  //todo dynamic route data
  console.log(params)
  return (
    <PageWrapper>
      <h1>Features post</h1>
    </PageWrapper>
  )
}
