import { getPublicPosts } from '@/app/blog/serveces/getPosts'
import PostOverview from '@/app/blog/components/postOverview'
import { use } from 'react'

export const ListOfPosts = () => {
  const publicPosts = use(getPublicPosts())

  if (publicPosts === undefined || publicPosts.length === 0) {
    return null
  }

  return publicPosts.map((post) => <PostOverview key={post.id} post={post} />)
}
