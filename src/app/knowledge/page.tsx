import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Knowledge Page',
  description: 'testing Nextjs 14 Knowledge page',
  keywords: ['yuhur', 'Knowledge page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function Knowledge() {
  return (
    <PageWrapper>
      <h1>Knowledge</h1>
    </PageWrapper>
  )
}
