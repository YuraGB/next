import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setRating, TRating } from '@/server/actions/setRating'
import { GET_ONE_TALE } from '@/server/actions/queryNaming'

export const useAddRattingService = (taleId: string | undefined) => {
  const queryClient = useQueryClient()
  const { mutate, data, error, status } = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: TRating }) =>
      await setRating({ id, data }),
    onError: (error) => {
      console.log(error)
    },
    onSettled: () => {
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
