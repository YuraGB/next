import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateTale } from '@/actions/updateTale'
import { GET_ALL_TALES } from '@/actions/queryNaming'
import { Tale } from '.prisma/client'

const useUpdateTaleHandler = () => {
  const queryClient = useQueryClient()
  const { mutate, data, error } = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Tale> }) =>
      await updateTale(id, data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [GET_ALL_TALES] }),
  })
  return { onUpdateTale: mutate, data, error }
}

export default useUpdateTaleHandler
