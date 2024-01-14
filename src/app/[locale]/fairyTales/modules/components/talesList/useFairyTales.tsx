import { getAllFairyTales } from '@/actions/getAllFairyTales'
import { useQuery } from '@tanstack/react-query'
import { GET_ALL_TALES } from '@/actions/queryNaming'

export const useFairyTales = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_ALL_TALES],
    queryFn: async () => await getAllFairyTales(),
  })
  return { tales: data, isLoading, error }
}
