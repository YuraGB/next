import { useMutation } from '@tanstack/react-query'
import { setRating, TRating } from '@/server/actions/setRating'
import { useRouter } from 'next/navigation'

export const useRating = (rating: TRating | null, id: string) => {
  const router = useRouter()
  const { mutate, data, error, status } = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: TRating }) =>
      await setRating({ id, data }),
    onSuccess: () => {
      router.refresh()
    },
  })
  const isPending = status === 'pending'

  const onClick = (rate: number) => {
    const newRating = {
      rating: rating?.rating ? rating?.rating + rate : rate,
      count: rating?.count ? rating?.count + 1 : 1,
    }
    if (!isPending) {
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
