import { useQuery } from "@tanstack/react-query";
import { GET_ONE_TALE } from "@/server/actions/queryNaming";
import { getTale } from "@/server/actions/TaleServices/getTale";
import { type TaleWithRelations } from "@/server/actions/types";

export type TTaleWithRelations = Partial<TaleWithRelations> | null | undefined;

export type TUseTaleContent = {
  status: string;
  data: TTaleWithRelations;
  error: Error | null;
};
export const useGetOneTale = (id: string | undefined): TUseTaleContent => {
  const { data, status, error } = useQuery({
    queryKey: [GET_ONE_TALE, id],
    queryFn: () => getTale(id ?? ""),
    enabled: Boolean(id),
  });

  return { data, status, error };
};
