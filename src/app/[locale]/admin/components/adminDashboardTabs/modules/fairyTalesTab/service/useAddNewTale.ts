import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_ALL_TALES } from "@/server/actions/queryNaming";
import addNewTale, { type TCreateTale } from "@/server/actions/addNewTale";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAddNewTale = () => {
  const queryClient = useQueryClient();
  const { mutate, data, error } = useMutation({
    // eslint-disable-next-line no-shadow
    mutationFn: (data: TCreateTale) => addNewTale(data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: [GET_ALL_TALES] }),
  });
  return { onAddTale: mutate, data, error };
};
