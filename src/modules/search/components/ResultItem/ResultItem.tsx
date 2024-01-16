import { Tale } from '.prisma/client'
import { FC, memo, ReactNode } from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import Image from 'next/image'
import { CategoryTale } from '@prisma/client'

type ResultItemT = {
  tale: Partial<Tale> & { categoryTale: CategoryTale | undefined }
  onClick: (id: string) => void
}

const ResultItem: FC<ResultItemT> = ({ tale, onClick }): ReactNode | null => {
  if (!tale) {
    return null
  }

  const { id } = tale

  return (
    <Card
      className="py-4 my-2"
      isPressable={true}
      onClick={() => id && onClick(id)}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{tale.title}</p>
        <small className="text-default-500">
          {tale.categoryTale?.name ? tale.categoryTale.name : tale.forAge}
        </small>
        <h4 className="font-light text-sm text-left">
          {tale.shortDescription}
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={tale.mainImage || ''}
          width={270}
          height={400}
        />
      </CardBody>
    </Card>
  )
}

export default memo(ResultItem)
