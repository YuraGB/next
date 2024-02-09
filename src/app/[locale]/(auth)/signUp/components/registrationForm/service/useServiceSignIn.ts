import { useMutation } from "@tanstack/react-query";
import signInUser from "@/app/[locale]/(auth)/login/components/loginForm/service/signInService";
import toast from "react-hot-toast";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useServiceSignIn = () => {
  const {
    mutate: signIn,
    data: signInData,
    status: onSignInStatus,
  } = useMutation({
    mutationFn: signInUser,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signIn, signInData, onSignInStatus };
};
