import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "@/server/actions/deleteComment";
import { GET_ONE_TALE } from "@/server/actions/queryNaming";

export const useDeleteCommentService = (taleId: string) => {
  const queryClient = useQueryClient();
  const { error, data, status, mutate } = useMutation({
    mutationFn: async (id: string) => {
      await deleteComment(id);
    },
    // eslint-disable-next-line no-shadow
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: [GET_ONE_TALE, taleId] });
    },
  });

  return {
    error,
    data,
    status,
    mutate,
  };
};
