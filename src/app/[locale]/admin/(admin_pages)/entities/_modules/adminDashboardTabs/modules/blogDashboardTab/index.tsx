import React, { type FC } from "react";
import PostsList from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/blogDashboardTab/components/postsList/PostsList";
import { type PostT } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/blogDashboardTab/model/Post";

const AdminBlogTab: FC<{ posts: PostT[] | undefined }> = ({ posts }) => {
  return (
    <article className={"w-full"}>
      <PostsList postList={posts} />
    </article>
  );
};

export default React.memo(AdminBlogTab);
