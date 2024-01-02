import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Features Page',
  description: 'testing Nextjs 14 Features page',
  keywords: ['yuhur', 'Blog page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function Blog() {
  return (
    <PageWrapper>
      <h1>Features</h1>
    </PageWrapper>
  )
}
