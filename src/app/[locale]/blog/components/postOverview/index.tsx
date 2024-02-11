import { memo, type ReactNode } from "react";
import { type Post } from ".prisma/client";
import Image from "next/image";

type PublicPost = Pick<Post, "id" | "title" | "content" | "image" | "publishedAt">;

type Props = {
  post: PublicPost;
};

const PostOverview = ({ post }: Props): ReactNode | null => {
  if (!post) {
    return null;
  }

  const { title, publishedAt, content, image } = post;

  return (
    <article>
      <p>{title}</p>
      <p>{content}</p>
      {image ? (
        <Image src={image} alt={"post images"} width={500} height={500} loading={"lazy"} />
      ) : null}
      <p>{publishedAt.toLocaleDateString()}</p>
    </article>
  );
};

export default memo(PostOverview);
