import { addComment, type TCreateComment } from "@/server/actions/addComment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_ONE_TALE } from "@/server/actions/queryNaming";

export const useAddCommentService = (taleId: string) => {
  const queryClient = useQueryClient();
  const { error, data, status, mutate } = useMutation({
    mutationFn: (commentData: TCreateComment) => addComment(commentData),
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
