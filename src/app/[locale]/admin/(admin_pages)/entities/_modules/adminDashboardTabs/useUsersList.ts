import { getUsers } from "@/server/actions/UserServises/getUsers";
import { useQuery } from "@tanstack/react-query";
import { GET_ALL_USERS } from "@/server/actions/queryNaming";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUsersList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: () => getUsers(),
  });

  return { users: data, isLoading, error };
};
