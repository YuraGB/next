import { useQuery } from "@tanstack/react-query";
import { getAllFairyTales } from "@/server/actions/TaleServices/getAllFairyTales";
import { type TaleWithRelations } from "@/server/actions/types";

type TUSeSlides = {
  slides: TaleWithRelations[] | undefined;
  isLoading: boolean;
};

export const useHPSlider = (): TUSeSlides => {
  const { data: slides, isLoading } = useQuery({
    queryKey: ["allTales"],
    queryFn: () => getAllFairyTales({}),
  });

  return { slides, isLoading };
};
