import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fairy tales page',
  description: 'Catalog of the Fairy Tales',
  keywords: ['Fairy tales', 'Blog page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function FairyTales() {
  return (
    <PageWrapper>
      <h1>Fairy tales page</h1>
    </PageWrapper>
  )
}
