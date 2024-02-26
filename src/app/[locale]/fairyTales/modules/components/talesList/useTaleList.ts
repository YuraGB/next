import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllFairyTalesWithPagination } from "@/server/actions/TaleServices/getAllFairyTalesWithPagination";
import { useMemo, useRef } from "react";
import { GET_TALES_PAGINATION } from "@/server/actions/queryNaming";
import { useFilters } from "@/app/[locale]/fairyTales/modules/components/talesList/useFilters";
import { type TUseTaleList } from "@/app/[locale]/fairyTales/modules/components/talesList/types";

export const useTaleList = (): TUseTaleList => {
  const showLoadMore = useRef<boolean>(false);
  const { onSetSort, filters } = useFilters();

  // data -> {pages: [page1, page2, ...]} -> page1 -> [<total of pages : number>, TaleWithRelations[] | undefined, <next page : number | null>]
  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: [GET_TALES_PAGINATION, filters],
    queryFn: ({ pageParam }) => {
      return getAllFairyTalesWithPagination({ currentPage: pageParam, filters });
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

  return {
    taleList: listData,
    fetchNextPage,
    isFetchingNextPage,
    status,
    showLoadMore,
    onSetSort,
  };
};
