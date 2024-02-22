import {
  type FetchNextPageOptions,
  type InfiniteData,
  type InfiniteQueryObserverResult,
  type Register,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { getAllFairyTalesWithPagination } from "@/server/actions/TaleServices/getAllFairyTalesWithPagination";
import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useMemo, useRef } from "react";
import { GET_TALES_PAGINATION } from "@/server/actions/queryNaming";
import { type TaleWithRelations } from "@/server/actions/types";

type TUseTaleList = {
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<[number, TaleWithRelations[] | undefined, number | null]>,
      Register extends {
        defaultError: infer TError;
      }
        ? TError
        : Error
    >
  >;
  isFetchingNextPage: boolean;
  taleList: Array<FlatArray<Array<TaleWithRelations[] | undefined>, 1>> | never[];
  showLoadMore: React.MutableRefObject<boolean>;
  status: "error" | "success" | "pending";
};

export const useTaleList = (): TUseTaleList => {
  const showLoadMore = useRef<boolean>(false);

  // data -> {pages: [page1, page2, ...]} -> page1 -> [<total of pages : number>, TaleWithRelations[] | undefined, <next page : number | null>]
  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: [GET_TALES_PAGINATION],
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
