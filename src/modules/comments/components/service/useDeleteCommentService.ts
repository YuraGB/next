import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteComment } from '@/server/actions/deleteComment'
import { GET_ONE_TALE } from '@/server/actions/queryNaming'

export const useDeleteCommentService = (taleId: string) => {
  const queryClient = useQueryClient()
  const { error, data, status, mutate } = useMutation({
    mutationFn: async (id: string) => {
      await deleteComment(id)
    },
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
