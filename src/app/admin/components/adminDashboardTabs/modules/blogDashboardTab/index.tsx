import React, { FC } from 'react'
import PostsList from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/components/postsList/PostsList'
import { PostT } from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/model/Post'

const AdminBlogTab: FC<{ posts: PostT[] | undefined }> = ({ posts }) => {
  return (
    <article className={'w-full'}>
      <PostsList postList={posts} />
    </article>
  )
}

export default React.memo(AdminBlogTab)
