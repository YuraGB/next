import {
  getAllComments,
  type TGetAllComments,
} from "@/server/actions/CommentServises/getAllComments";
import { useQuery } from "@tanstack/react-query";
import { type UseQueryResult } from "@tanstack/react-query/src/types";
import { GET_ALL_COMMENTS } from "@/server/actions/queryNaming";

export const useGetComments = (): UseQueryResult<TGetAllComments, Error> => {
  return useQuery({
    queryKey: [GET_ALL_COMMENTS],
    queryFn: () => {
      return getAllComments();
    },
  });
};
