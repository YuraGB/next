import { type UseMutateFunction, useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTale } from "@/server/actions/updateTale";
import { GET_ALL_TALES } from "@/server/actions/queryNaming";
import { type Tale } from ".prisma/client";
import { type TCreateTale } from "@/server/actions/addNewTale";

type TMutateFn = UseMutateFunction<
  Tale | undefined,
  Error,
  { id: string; updateTaleData: TCreateTale },
  unknown
>;

const useUpdateTaleHandler = (): {
  data: undefined | Tale;
  onUpdateTale: TMutateFn;
  error: unknown;
} => {
  const queryClient = useQueryClient();
  const { mutate, data, error } = useMutation({
    mutationFn: ({ id, updateTaleData }: { id: string; updateTaleData: TCreateTale }) =>
      updateTale(id, updateTaleData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [GET_ALL_TALES] }),
  });
  return { onUpdateTale: mutate, data, error };
};

export default useUpdateTaleHandler;
