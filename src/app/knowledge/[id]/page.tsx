import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Knowledge post Page',
  description: 'testing Nextjs 14 Knowledge post page',
  keywords: ['yuhur', 'Knowledge post page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function KnowledgePost({
  params,
}: {
  params: { id: string }
}): React.ReactNode {
  //todo dynamic route data
  console.log(params)
  return (
    <PageWrapper>
      <h1>Knowledge post</h1>
    </PageWrapper>
  )
}
