import { useQuery } from "@tanstack/react-query";
import { getAllFairyTales } from "@/server/actions/getAllFairyTales";
import { type TFindAllTales } from "@/server/actions/types";

type TUSeSlides = {
  slides: TFindAllTales[] | undefined;
  isLoading: boolean;
};

export const useHPSlider = (): TUSeSlides => {
  const { data: slides, isLoading } = useQuery({
    queryKey: ["allTales"],
    queryFn: () => getAllFairyTales(),
  });

  return { slides, isLoading };
};
