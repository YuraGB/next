import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTale } from "@/server/actions/updateTale";
import { GET_ALL_TALES } from "@/server/actions/queryNaming";
import { type Tale } from ".prisma/client";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useUpdateTaleHandler = () => {
  const queryClient = useQueryClient();
  const { mutate, data, error } = useMutation({
    // eslint-disable-next-line no-shadow
    mutationFn: ({ id, data }: { id: string; data: Partial<Tale> }) => updateTale(id, data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: [GET_ALL_TALES] }),
  });
  return { onUpdateTale: mutate, data, error };
};

export default useUpdateTaleHandler;
