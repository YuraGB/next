import { Rating } from '.prisma/client'
import React, { FC, ReactNode } from 'react'
import { useRating } from '@/modules/rating/useRating'
import { Rating as ReactRating } from '@smastrom/react-rating'
import Description from '@/modules/rating/components/Description/Description'

const RatingComponent: FC<{
  rating: Rating | null | undefined
  taleId: string | undefined
}> = ({ rating, taleId }): ReactNode => {
  const { onClick, error, averageRating, isPending, canEdit, userId } =
    useRating(rating, taleId)

  return (
    <section className={'flex flex-col align-middle items-start'}>
      <div className={'flex'}>
        <small className={'mr-2'}>{rating?.count}</small>
        <ReactRating
          className={'max-w-[100px]'}
          value={Math.round(averageRating)}
          onChange={onClick}
          isDisabled={!canEdit || isPending}
        />
      </div>
      <Description canVote={canEdit} userId={userId} />
      <>{error ? <p className={'text-red-700'}>{error.message}</p> : null}</>
    </section>
  )
}

export default RatingComponent
