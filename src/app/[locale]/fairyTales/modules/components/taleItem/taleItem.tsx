'use client'
import React from 'react'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import Image from 'next/image'
import { Divider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { Pages } from '@/utils/pages'
import placeholder from '@/assets/placeholder.webp'
import RatingComponent from '@/modules/rating/Rating'
import CreatedAt from '@/app/[locale]/fairyTales/modules/components/taleItem/CreatedAt'
import { TFindAllTales } from '@/server/actions/types'

const TaleItem = ({
  tale,
}: {
  tale: TFindAllTales
}): React.ReactNode | null => {
  const router = useRouter()
  if (!tale) {
    return null
  }

  const {
    id,
    title,
    categoryTale,
    mainImage,
    createdAt,
    shortDescription,
    rating,
  } = tale

  const onClick = (id: string) => {
    if (id) {
      router.push(`${Pages.FAIRY_TALES}/${id}`, { scroll: true })
    }
  }

  return (
    <Card className="w-full rounded-[0]" isPressable isBlurred isHoverable>
      <CardHeader
        className="flex gap-3 relative p-0"
        onClick={() => onClick(id)}
      >
        <Image
          alt="nextui logo"
          height={200}
          src={mainImage ? mainImage : placeholder}
          width={600}
          className={'w-full h-[300px] object-cover'}
        />
        <div className="flex flex-col absolute left-0 top-0 max-w-[50%] w-full max-h-[50%]">
          <p className="font-['cinzel_decorativeregular'] text-[22px] text-md relative text-amber-50 p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            {title}
          </p>
        </div>
        <div className="flex flex-col items-start absolute left-6 button-[50%] max-w-[50%] w-full h-[50%]">
          <p className="font-['cormorant_it'] italic text-[18px] text-left line-clamp-4 relative text-amber-50 p-0  items-center color-inherit subpixel-antialiased  backdrop-blur ">
            {shortDescription}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter
        className={
          'bg-white border-t-1 border-default-600 dark:border-default-100 text-gray-700 flex justify-between rounded-[0] px-6'
        }
      >
        <div className={'flex flex-col justify-start items-start'}>
          <p>Category: {categoryTale.name}</p>
          <CreatedAt createdAt={createdAt} />
        </div>

        <RatingComponent rating={rating} taleId={id} />
      </CardFooter>
    </Card>
  )
}

export default React.memo(TaleItem)
