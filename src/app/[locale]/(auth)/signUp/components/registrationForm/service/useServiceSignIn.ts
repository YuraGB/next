import { useMutation } from "@tanstack/react-query";
import signInUser from "@/app/[locale]/(auth)/login/components/loginForm/service/signInService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useServiceSignIn = () => {
  const router = useRouter();

  const {
    mutate: signIn,
    data: signInData,
    status: onSignInStatus,
  } = useMutation({
    mutationFn: signInUser,
    onError: () => {
      toast.error("There is an error during logging");
    },
    onSuccess: (data) => {
      if (data?.ok === true) {
        router.push("/");
      }
    },
  });

  return { signIn, signInData, onSignInStatus };
};
