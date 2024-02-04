import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setRating, TRating } from '@/server/actions/setRating'
import {
  GET_ONE_TALE,
  GET_ONE_USER_WITH_VOTE,
} from '@/server/actions/queryNaming'

export const useAddRattingService = (
  taleId: string | undefined,
  userId: string | null | undefined
) => {
  const queryClient = useQueryClient()
  const { mutate, data, error, status } = useMutation({
    mutationFn: async ({
      taleId,
      data,
      userId,
    }: {
      taleId: string
      data: TRating
      userId: string
    }) => await setRating({ taleId, data, userId }),
    onError: (error) => {
      console.log(error)
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ONE_USER_WITH_VOTE, { userId, taleId }],
      })
      queryClient.invalidateQueries({ queryKey: [GET_ONE_TALE, taleId] })
    },
  })

  return {
    error,
    data,
    status,
    mutate,
  }
}
