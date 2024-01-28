import { addComment, TCreateComment } from '@/server/actions/addComment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GET_ONE_TALE } from '@/server/actions/queryNaming'

export const useAddCommentService = (taleId: string) => {
  const queryClient = useQueryClient()
  const { error, data, status, mutate } = useMutation({
    mutationFn: async (commentData: TCreateComment) =>
      await addComment(commentData),
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
