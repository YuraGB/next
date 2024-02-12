import { type UseMutateFunction, useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTale } from "@/server/actions/updateTale";
import { GET_ALL_TALES } from "@/server/actions/queryNaming";
import { type Tale } from ".prisma/client";

type TMutateFn = UseMutateFunction<
  Tale | undefined,
  Error,
  { id: string; updateTaleData: Partial<Tale> },
  unknown
>;

const useUpdateTaleHandler = (): {
  data: undefined | Tale;
  onUpdateTale: TMutateFn;
  error: unknown;
} => {
  const queryClient = useQueryClient();
  const { mutate, data, error } = useMutation({
    mutationFn: ({ id, updateTaleData }: { id: string; updateTaleData: Partial<Tale> }) =>
      updateTale(id, updateTaleData),
    onSettled: () => queryClient.invalidateQueries({ queryKey: [GET_ALL_TALES] }),
  });
  return { onUpdateTale: mutate, data, error };
};

export default useUpdateTaleHandler;
