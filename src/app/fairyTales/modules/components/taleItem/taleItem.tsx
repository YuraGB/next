import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import Image from 'next/image'
import { Divider } from '@nextui-org/react'
import { Tale } from '.prisma/client'

const TaleItem = ({ tale }: { tale: Tale }): React.ReactNode | null => {
  if (!tale) {
    return null
  }

  const { title, forAge, mainImage, createdAt, shortDescription } = tale
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          src={mainImage ? mainImage : ''}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{shortDescription}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p>{forAge}</p>
        <p>{createdAt.toString()}</p>
      </CardFooter>
    </Card>
  )
}

export default React.memo(TaleItem)
