import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/server/actions/getUserRate";
import { GET_ONE_USER_WITH_VOTE } from "@/server/actions/queryNaming";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCanUserVote = (userId: string | null | undefined, taleId: string | undefined) => {
  const [canEdit, setCanEdit] = useState<boolean>(true);

  const { data, isLoading } = useQuery({
    queryKey: [GET_ONE_USER_WITH_VOTE, { userId, taleId }],
    queryFn: () => getUsers({ userId, taleId }),
  });

  useEffect(() => {
    if ((data ?? !userId) || isLoading) {
      setCanEdit(false);
    } else {
      setCanEdit(true);
    }
  }, [data, isLoading, userId]);

  return { canEdit };
};
