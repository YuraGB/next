import { Rating } from '.prisma/client'
import React, { FC, memo, ReactNode } from 'react'
import ReactStars from 'react-stars'
import { useRating } from '@/components/rating/useRating'

const RatingComponent: FC<{ rating: Rating | null; taleId: string }> = ({
  rating,
  taleId,
}): ReactNode => {
  const { onClick, error, averageRating } = useRating(rating, taleId)

  return (
    <>
      <ReactStars {...{ size: 24, value: averageRating }} onChange={onClick} />
      <>{error ? <p className={'text-red-700'}>{error.message}</p> : null}</>
    </>
  )
}

export default memo(RatingComponent)
