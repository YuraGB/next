import { useSession } from "next-auth/react";
import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUserId = () => {
  const { data: sessionData } = useSession();
  const user = sessionData?.user;

  return useMemo(() => {
    if (user) {
      return user.id ? user.id : null;
    }
    return null;
  }, [user]);
};
