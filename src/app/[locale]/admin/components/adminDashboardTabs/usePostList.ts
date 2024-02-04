import { useQuery } from "@tanstack/react-query";
import { GET_ALL_POSTS } from "@/server/actions/queryNaming";
import { getAllPosts } from "@/server/actions/getPublicPosts";

export const usePostList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_ALL_POSTS],
    queryFn: () => getAllPosts(),
  });

  return { posts: data, isLoading, error };
};
