import { useMutation } from "@tanstack/react-query";
import updateUser from "@/server/actions/UserServises/updateUser";
import type { User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUpdateUserPassword = () => {
  return useMutation({
    mutationKey: ["updateUserPassword"],
    mutationFn: (data: Partial<User>) => updateUser(data),
  });
};
