import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GET_ALL_USERS } from '@/server/actions/queryNaming'
import { createUser, TCreateUser } from '@/server/actions/createUser'

export const useAddNewUser = () => {
  const queryClient = useQueryClient()
  const { mutate, data, error } = useMutation({
    mutationFn: async (data: TCreateUser) => await createUser(data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [GET_ALL_USERS] }),
  })
  return { onAddUser: mutate, data, error }
}
