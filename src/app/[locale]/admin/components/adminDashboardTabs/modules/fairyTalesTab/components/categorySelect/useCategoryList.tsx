import { useQuery } from "@tanstack/react-query";
import getCategories from "@/server/actions/getCategories";
import { useMemo } from "react";

export const useCategoryList = () => {
  const { data } = useQuery({
    queryKey: ["get categories"],
    queryFn: () => getCategories(),
  });

  const categoryList = useMemo(() => {
    if (data?.length) {
      return data;
    }

    return [];
  }, [data]);

  return { categoryList };
};
