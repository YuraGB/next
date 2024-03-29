import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setRating, type TRating } from "@/server/actions/RatingServises/setRating";
import { GET_ONE_TALE, GET_ONE_USER_WITH_VOTE } from "@/server/actions/queryNaming";

export const useAddRattingService = (
  taleId: string | undefined,
  userId: string | null | undefined
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
  const queryClient = useQueryClient();
  const { mutate, data, error, status } = useMutation({
    mutationFn: ({
      // eslint-disable-next-line no-shadow
      taleId,
      // eslint-disable-next-line no-shadow
      data,
      // eslint-disable-next-line no-shadow
      userId,
    }: {
      taleId: string;
      data: TRating;
      userId: string;
    }) => setRating({ taleId, data, userId }),
    // eslint-disable-next-line no-shadow
    onError: (error: Error): void => {
      console.log(error);
    },
    onSettled: () => {
      return Promise.all([
        queryClient.invalidateQueries({
          queryKey: [GET_ONE_USER_WITH_VOTE, { userId, taleId }],
        }),
        queryClient.invalidateQueries({ queryKey: [GET_ONE_TALE, taleId] }),
      ]);
    },
  });

  return {
    error,
    data,
    status,
    mutate,
  };
};
