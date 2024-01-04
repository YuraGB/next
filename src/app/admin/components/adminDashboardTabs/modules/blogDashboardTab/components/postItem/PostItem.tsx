import React from 'react'
import { PostT } from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/model/Post'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import Image from 'next/image'
import { Divider } from '@nextui-org/react'

const PostItem = ({ post }: { post: PostT }) => {
  if (!post) {
    return null
  }

  const { author, content, image, title, published } = post
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          src={image ? image : ''}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p>{`${published ? 'published' : 'Not published'}`}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p>{author?.name}</p>
      </CardFooter>
    </Card>
  )
}

export default React.memo(PostItem)
