import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import { ListOfPosts } from '@/app/blog/components/listOfPosts'
import { Suspense } from 'react'

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
      <Suspense fallback={<p>Loading...</p>}>
        <ListOfPosts />
      </Suspense>
    </PageWrapper>
  )
}
