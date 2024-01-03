'use client'
import { Tale } from '.prisma/client'
import { memo, ReactNode } from 'react'
import Image from 'next/image'
import { useTaleContent } from '@/app/fairyTales/[id]/components/useTaleContent'

const TaleContent = ({
  taleContent,
}: {
  taleContent: Tale
}): ReactNode | null => {
  const { forAge, mainImage, createdAt, title, content } =
    useTaleContent(taleContent)

  return (
    <article className={'w-full'}>
      <header className={'relative mb-8'}>
        <section
          className={'absolute w-full h-full flex flex-col justify-between'}
        >
          <h1 className={'text-amber-50 text-xl text-center  mt-[10%]'}>
            {title ? title : 'Fairy Tale'}
          </h1>
          <div className={'flex justify-between text-amber-50 p-4'}>
            <em>Published : {createdAt.toLocaleDateString()}</em>
            <p>
              <em>Category: {forAge}</em>
            </p>
          </div>
        </section>
        <Image
          width={700}
          height={200}
          alt="NextUI hero Image with delay"
          src={mainImage}
          loading={'lazy'}
          className={'w-full object-cover h-auto'}
        />
      </header>
      <section className={'relative'}>{content}</section>
    </article>
  )
}

export default memo(TaleContent)
