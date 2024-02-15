import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";
import type { TErrorObject } from "@/server/actions/types";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { createUser } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/createUser";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useServiceCreate = () => {
  const {
    mutate: createNewUser,
    data: newUserData,
    status: onCreateStatus,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: (data: Pick<User, "email" | "hashPassword"> | TErrorObject) => {
      if ("isError" in data && data.errorCode) {
        const message = getErrorMessage(data);

        toast.error(message);
      }
    },
  });

  return { createNewUser, newUserData, onCreateStatus };
};
