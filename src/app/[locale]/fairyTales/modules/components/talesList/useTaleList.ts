import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllFairyTalesWithPagination } from "@/server/actions/TaleServices/getAllFairyTalesWithPagination";
import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTaleList = () => {
  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["tales"],
    queryFn: ({ pageParam }) => {
      return getAllFairyTalesWithPagination(pageParam);
    },
    getNextPageParam: (lastPage) => {
      return lastPage && Array.isArray(lastPage) ? lastPage[2] : 1;
    },
    staleTime: 1000 * 60 * 5,
  });

  const listData = useMemo(() => {
    if (data?.pages) {
      return data.pages.map((page) => page[1]).flat();
    }
    return [];
  }, [data?.pages]);

  return { taleList: listData, fetchNextPage, isFetchingNextPage, status };
};
