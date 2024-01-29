import { GET_ALL_USERS } from '@/server/actions/queryNaming'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import updateUser from '@/server/actions/updateUser'
import { User } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'

const useUpdateUser = () => {
  const queryClient = useQueryClient()
  const {
    mutate,
    error,
    data: updatedUser,
    status,
  } = useMutation({
    mutationFn: async (data: User) => await updateUser(data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [GET_ALL_USERS] }),
  })

  return { updatedUser, status, error, mutate }
}

export default useUpdateUser
