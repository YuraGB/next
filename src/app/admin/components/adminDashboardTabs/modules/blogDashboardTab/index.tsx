import React from 'react'
import PostsList from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/components/postsList/PostsList'

const AdminBlogTab = () => {
  return (
    <article className={'w-full'}>
      <PostsList />
    </article>
  )
}

export default React.memo(AdminBlogTab)
