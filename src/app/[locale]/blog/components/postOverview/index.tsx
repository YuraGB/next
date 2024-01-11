import { memo } from 'react'
import { Post } from '.prisma/client'
import Image from 'next/image'

type PublicPost = Pick<
  Post,
  'id' | 'title' | 'content' | 'image' | 'publishedAt'
>

type Props = {
  post: PublicPost
}

const PostOverview = ({ post }: Props) => {
  if (!post) {
    return null
  }

  const { title, publishedAt, content, image } = post

  return (
    <article>
      <p>{title}</p>
      <p>{content}</p>
      {image ? (
        <Image
          src={image}
          alt={'post image'}
          width={500}
          height={500}
          loading={'lazy'}
        />
      ) : null}
      <p>{publishedAt.toLocaleDateString()}</p>
    </article>
  )
}

export default memo(PostOverview)
