import React from 'react'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import Image from 'next/image'
import { Divider } from '@nextui-org/react'
import { Tale } from '.prisma/client'
import { useRouter } from 'next/navigation'
import { Pages } from '@/utils/pages'
import placeholder from '@/assets/placeholder.webp'

const TaleItem = ({ tale }: { tale: Tale }): React.ReactNode | null => {
  const router = useRouter()
  if (!tale) {
    return null
  }

  const { id, title, forAge, mainImage, createdAt, shortDescription } = tale

  const onClick = (id: string) => {
    if (id) {
      router.push(`${Pages.FAIRY_TALES}/${id}`, { scroll: true })
    }
  }

  return (
    <Card
      className="min-w-[400px]"
      isPressable
      isBlurred
      isHoverable
      onClick={() => onClick(id)}
    >
      <CardHeader className="flex gap-3 relative p-0">
        <Image
          alt="nextui logo"
          height={200}
          src={mainImage ? mainImage : placeholder}
          width={600}
          className={'w-full h-[400px] object-cover'}
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
          'absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 text-amber-50 flex justify-between'
        }
      >
        <p>Category: {forAge}</p>
        <p>Published: {createdAt.toLocaleDateString()}</p>
      </CardFooter>
    </Card>
  )
}

export default React.memo(TaleItem)
