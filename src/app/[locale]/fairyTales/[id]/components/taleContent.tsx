'use client'
import { memo, ReactNode, Suspense } from 'react'
import Image from 'next/image'
import { useTaleContent } from '@/app/[locale]/fairyTales/[id]/components/useTaleContent'
import placeholder from '@/assets/placeholder.webp'
import dynamic from 'next/dynamic'
import { TaleWithRelations } from '@/server/actions/types'
import { FormattedMessage } from 'react-intl'

const RatingComponent = dynamic(() => import('@/modules/rating/Rating'))
const Comments = dynamic(() => import('@/modules/comments'))

const TaleContent = ({
  taleContent,
}: {
  taleContent: Partial<TaleWithRelations>
}): ReactNode | null => {
  const { forAge, mainImage, createdAt, title, content, comments, rating } =
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
      <Suspense fallback={null}>
        <RatingComponent taleId={taleContent.id} rating={rating} />
      </Suspense>

      <section>
        <h3 className={'text-amber-50 text-center text-[32px] mt-8'}>
          <FormattedMessage
            id={'comments.section'}
            defaultMessage={'You can leave comment below'}
          />{' '}
        </h3>
        <Suspense fallback={null}>
          <Comments
            shouldAddComment={true}
            messages={comments}
            taleId={taleContent.id}
          />
        </Suspense>
      </section>
    </article>
  )
}

export default memo(TaleContent)
