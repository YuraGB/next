import { useQuery } from '@tanstack/react-query'
import { GET_ALL_POSTS } from '@/actions/queryNaming'
import { getAllPosts } from '@/actions/getPublicPosts'

export const usePostList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_ALL_POSTS],
    queryFn: async () => await getAllPosts(),
  })

  return { posts: data, isLoading, error }
}
