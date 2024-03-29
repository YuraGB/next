import React, { type FC } from "react";
import PostItem from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/blogDashboardTab/components/postItem/PostItem";
import { type PostT } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/blogDashboardTab/model/Post";
import PostListSkeleton from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/blogDashboardTab/components/postsList/PostListSkeleton";

const PostsList: FC<{ postList: PostT[] | undefined }> = ({ postList }) => {
  if (!postList || postList.length === 0) {
    return <PostListSkeleton />;
  }

  return (
    <section className={"grid justify-start gap-2"}>
      {postList.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
};

export default React.memo(PostsList);
