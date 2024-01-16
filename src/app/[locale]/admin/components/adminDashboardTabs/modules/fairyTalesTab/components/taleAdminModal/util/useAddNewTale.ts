import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Tale } from '.prisma/client'
import { GET_ALL_TALES } from '@/actions/queryNaming'
import addNewTale from '@/actions/addNewTale'

export const useAddNewTale = () => {
  const queryClient = useQueryClient()
  const { mutate, data, error } = useMutation({
    mutationFn: async (data: Tale) => await addNewTale(data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [GET_ALL_TALES] }),
  })
  return { onAddTale: mutate, data, error }
}
