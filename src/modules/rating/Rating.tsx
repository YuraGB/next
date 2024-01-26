import { Rating } from '.prisma/client'
import React, { FC, memo, ReactNode } from 'react'
import ReactStars from 'react-stars'
import { useRating } from '@/modules/rating/useRating'

const RatingComponent: FC<{
  rating: Rating | null | undefined
  taleId: string | undefined
}> = ({ rating, taleId }): ReactNode => {
  const { onClick, error, averageRating } = useRating(rating, taleId)

  return (
    <section className={'flex align-middle items-center'}>
      <small className={'mr-2'}>{rating?.count}</small>
      <ReactStars {...{ size: 24, value: averageRating }} onChange={onClick} />
      <>{error ? <p className={'text-red-700'}>{error.message}</p> : null}</>
    </section>
  )
}

export default memo(RatingComponent)
