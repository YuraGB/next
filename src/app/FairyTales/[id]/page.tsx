import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React from 'react'

export const dynamicParams = true

export const metadata: Metadata = {
  title: 'The tale',
  description: 'tale description',
  keywords: ['yuhur', 'Fairy tales'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function FairyTale({
  params,
}: {
  params: { id: string }
}): React.ReactNode {
  //todo dynamic route data
  console.log(params)
  return (
    <PageWrapper>
      <h1>FairyTale</h1>
    </PageWrapper>
  )
}
