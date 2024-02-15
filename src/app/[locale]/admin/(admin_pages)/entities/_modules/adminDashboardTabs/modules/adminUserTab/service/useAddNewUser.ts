import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_ALL_USERS } from "@/server/actions/queryNaming";
import { type TCreateUser } from "@/server/actions/UserServises/types";
import { createUser } from "@/server/actions/UserServises/createUser";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAddNewUser = () => {
  const queryClient = useQueryClient();
  const { mutate, data, error } = useMutation({
    // eslint-disable-next-line no-shadow
    mutationFn: (data: TCreateUser) => createUser(data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: [GET_ALL_USERS] }),
  });
  return { onAddUser: mutate, data, error };
};
