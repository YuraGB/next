import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  Register,
} from "@tanstack/react-query";
import type { TaleWithRelations } from "@/server/actions/types";
import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import type { ChangeEvent } from "react";

export type TUseTaleList = {
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
  onSetSort: (sort: ChangeEvent<HTMLSelectElement>) => void;
};
