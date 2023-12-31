import { memo } from 'react'
import { getPublicPosts } from '@/services/getPublicPosts'
import PostOverview from '@/app/blog/components/postOverview'

const ListOfPosts = async () => {
  const publicPosts = await getPublicPosts()

  if (publicPosts === undefined || publicPosts.length === 0) {
    return null
  }

  return publicPosts.map((post) => <PostOverview key={post.id} post={post} />)
}

export default memo(ListOfPosts)
