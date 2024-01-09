import { getUsers } from '@/actions/getUsers'
import { useQuery } from '@tanstack/react-query'
import { GET_ALL_USERS } from '@/actions/queryNaming'

export const useUsersList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: async () => await getUsers(),
  })

  return { users: data, isLoading, error }
}
