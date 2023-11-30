import Link from 'next/link'
import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Access Denied Page',
  description: 'testing Nextjs 14 Permission denied',
  keywords: ['yuhur', 'Denied page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function Denied() {
  return (
    <PageWrapper>
      <h1>Denied</h1>
      <Link href={'/'}>Home</Link>
    </PageWrapper>
  )
}
