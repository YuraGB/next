import { GET_ONE_USER_BY_EMAIL } from "@/server/actions/queryNaming";
import { findUser } from "@/server/actions/UserServises/findUser";
import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetUserByEmail = (email: string) => {
  return useQuery({
    queryKey: [GET_ONE_USER_BY_EMAIL, email],
    queryFn: () => {
      return findUser(email);
    },
    enabled: Boolean(email),
  });
};
