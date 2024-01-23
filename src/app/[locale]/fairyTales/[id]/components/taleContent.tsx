'use client'
import { Rating, Tale } from '.prisma/client'
import { memo, ReactNode } from 'react'
import Image from 'next/image'
import { useTaleContent } from '@/app/[locale]/fairyTales/[id]/components/useTaleContent'
import placeholder from '@/assets/placeholder.webp'
import RatingComponent from '@/components/rating/Rating'

const TaleContent = ({
  taleContent,
}: {
  taleContent: Tale & { rating: Rating | null }
}): ReactNode | null => {
  const { forAge, mainImage, createdAt, title, content } =
    useTaleContent(taleContent)

  return (
    <article className={'w-full'}>
      <header className={'relative mb-8'}>
        <section
          className={'absolute w-full h-full flex flex-col justify-between'}
        >
          <h1
            className={
              'font-["Cinzel_Decorative"] [color:white] text-[32px] text-center  mt-[10%]'
            }
          >
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
          src={mainImage ? mainImage : placeholder}
          loading={'lazy'}
          className={'w-full object-cover h-auto'}
        />
      </header>
      <section className={'relative'}>{content}</section>
      <RatingComponent taleId={taleContent.id} rating={taleContent.rating} />
    </article>
  )
}

export default memo(TaleContent)
