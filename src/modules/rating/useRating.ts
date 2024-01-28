import { TRating } from '@/server/actions/setRating'
import { useAddRattingService } from '@/modules/rating/useAddRatting'

export const useRating = (
  rating: TRating | null | undefined,
  id: string | undefined
) => {
  const { mutate, status, error, data } = useAddRattingService(id)

  const isPending = status === 'pending'

  const onClick = (rate: number) => {
    const newRating = {
      rating: rating?.rating ? rating?.rating + rate : rate,
      count: rating?.count ? rating?.count + 1 : 1,
    }
    if (!isPending && id) {
      mutate({ id, data: newRating })
    }
  }

  const averageRating =
    rating?.rating && rating?.count ? rating.rating / rating.count : 0

  return {
    onUpdateRate: mutate,
    data,
    error,
    isPending,
    onClick,
    averageRating,
  }
}
