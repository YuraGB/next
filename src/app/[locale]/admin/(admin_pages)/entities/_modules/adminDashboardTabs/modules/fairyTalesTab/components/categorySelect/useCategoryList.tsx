import { useQuery } from "@tanstack/react-query";
import getCategories from "@/server/actions/CategoryService/getCategories";
import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
