import { useEffect, useState } from 'react'
import { getPosts } from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/service/getPosts'
import { PostT } from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/model/Post'

export const usePostList = () => {
  const [posts, setPosts] = useState<PostT[] | undefined>()

  useEffect(() => {
    getPosts()
      .then((resp) => {
        if (resp) {
          setPosts(resp)
        }
      })
      .catch(console.log)
  }, [])

  return { posts }
}
