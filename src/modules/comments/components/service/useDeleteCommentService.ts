import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "@/server/actions/CommentServises/deleteComment";
import { GET_ONE_TALE } from "@/server/actions/queryNaming";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
      return queryClient.invalidateQueries({ queryKey: [GET_ONE_TALE, taleId] });
    },
  });

  return {
    error,
    data,
    status,
    mutate,
  };
};
