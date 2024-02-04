import { GET_ALL_USERS } from "@/server/actions/queryNaming";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateUser from "@/server/actions/updateUser";
import { type User } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const {
    mutate,
    error,
    data: updatedUser,
    status,
  } = useMutation({
    mutationFn: (data: User) => updateUser(data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: [GET_ALL_USERS] }),
  });

  return { updatedUser, status, error, mutate };
};

export default useUpdateUser;
