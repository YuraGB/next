import { getPublicPosts } from "@/server/actions/PostsServices/getPublicPosts";
import PostOverview from "@/app/[locale]/blog//components/postOverview";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ListOfPosts = async () => {
  const publicPosts = await getPublicPosts();

  if (publicPosts === undefined || publicPosts.length === 0) {
    return null;
  }

  return publicPosts.map((post) => <PostOverview key={post.id} post={post} />);
};

export default ListOfPosts;
