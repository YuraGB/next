import { useQuery } from "@tanstack/react-query";
import { GET_ALL_RATES } from "@/server/actions/queryNaming";
import {
  getAllRatingsFromTales,
  type TGetAllRatings,
} from "@/server/actions/RatingServises/getAllRatings";
import type { UseQueryResult } from "@tanstack/react-query/src/types";

export const useGetRates = (): UseQueryResult<TGetAllRatings, Error> => {
  return useQuery({
    queryKey: [GET_ALL_RATES],
    queryFn: () => {
      return getAllRatingsFromTales();
    },
  });
};
