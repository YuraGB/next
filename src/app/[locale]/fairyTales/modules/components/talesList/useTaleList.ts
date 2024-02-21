import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllFairyTalesWithPagination } from "@/server/actions/TaleServices/getAllFairyTalesWithPagination";
import { useMemo, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTaleList = () => {
  const showLoadMore = useRef<boolean>(false);
  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["tales"],
    queryFn: ({ pageParam }) => {
      return getAllFairyTalesWithPagination(pageParam);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage) {
        showLoadMore.current = Boolean(lastPage[2]);
        return lastPage[2];
      }
      showLoadMore.current = false;
      return null;
    },
    staleTime: 1000 * 60 * 5,
  });

  const listData = useMemo(() => {
    if (data?.pages) {
      return data.pages.map((page) => page[1]).flat();
    }
    return [];
  }, [data?.pages]);

  return { taleList: listData, fetchNextPage, isFetchingNextPage, status, showLoadMore };
};
