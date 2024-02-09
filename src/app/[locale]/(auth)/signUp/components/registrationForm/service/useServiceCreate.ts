import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/createUser";
import toast from "react-hot-toast";

export const useServiceCreate = () => {
  const {
    mutate: createNewUser,
    data: newUserData,
    status: onCreateStatus,
  } = useMutation({
    mutationFn: createUser,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createNewUser, newUserData, onCreateStatus };
};
