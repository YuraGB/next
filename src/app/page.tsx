import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Home Page',
  description: 'testing Nextjs 14 with all features',
}

export default function Home() {
  return (
    <PageWrapper>
      <h1>Home</h1>
    </PageWrapper>
  )
}
