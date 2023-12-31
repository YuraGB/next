import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
const ListOfPosts = dynamic(() => import('@/app/blog/components/listOfPosts'))

export const metadata: Metadata = {
  title: 'Gyb Nextjs Blog Page',
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
      <h1>Blog</h1>
      <ListOfPosts />
    </PageWrapper>
  )
}
