import React from 'react'
import { usePostList } from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/components/postsList/usePostList'
import PostItem from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/components/postItem/PostItem'

const PostsList = () => {
  const { posts } = usePostList()

  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className={'grid justify-start gap-2'}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  )
}

export default React.memo(PostsList)
