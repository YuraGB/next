import { getAllFairyTales } from "@/server/actions/getAllFairyTales";
import { useQuery } from "@tanstack/react-query";
import { GET_ALL_TALES } from "@/server/actions/queryNaming";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useFairyTales = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_ALL_TALES],
    queryFn: () => getAllFairyTales(),
  });
  return { tales: data, isLoading, error };
};
