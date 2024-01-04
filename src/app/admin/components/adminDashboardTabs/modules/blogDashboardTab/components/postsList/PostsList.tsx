import React, { FC } from 'react'
import PostItem from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/components/postItem/PostItem'
import { PostT } from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/model/Post'

const PostsList: FC<{ postList: PostT[] | undefined }> = ({ postList }) => {
  if (!postList || postList.length === 0) {
    return null
  }

  return (
    <section className={'grid justify-start gap-2'}>
      {postList.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  )
}

export default React.memo(PostsList)
