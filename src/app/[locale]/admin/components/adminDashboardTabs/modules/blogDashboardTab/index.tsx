import React, { type FC } from "react";
import PostsList from "@/app/[locale]/admin/components/adminDashboardTabs/modules/blogDashboardTab/components/postsList/PostsList";
import { type PostT } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/blogDashboardTab/model/Post";

const AdminBlogTab: FC<{ posts: PostT[] | undefined }> = ({ posts }) => {
  return (
    <article className={"w-full"}>
      <PostsList postList={posts} />
    </article>
  );
};

export default React.memo(AdminBlogTab);
