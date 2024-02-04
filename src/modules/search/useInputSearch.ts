import { type ChangeEvent, useCallback, useMemo, useState } from "react";
import useDebounce from "@/modules/search/useDebounce";
import { useQuery } from "@tanstack/react-query";
import getSearch from "@/server/actions/searchTale";
import { useRouter } from "next/navigation";
import { Pages } from "@/utils/pages";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInputSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  const router = useRouter();

  const redirectToTale = useCallback(
    (id: string) => {
      if (id) {
        setIsPopoverOpen(false);
        router.push(`${Pages.FAIRY_TALES}/${id}`, { scroll: true });
      }
    },
    [router]
  );

  const value = useDebounce(searchValue);

  const { data, isLoading, error } = useQuery({
    queryKey: ["searchTale", value],
    queryFn: () => {
      return getSearch(value);
    },
    enabled: Boolean(value),
  });

  const searchResults = useMemo(() => {
    if (data?.length) {
      return data;
    }
    return [];
  }, [data]);

  const onChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.value) {
      setSearchValue(event.target.value);
    }
  }, []);

  return {
    onChangeHandler,
    searchResults,
    isLoading,
    error,
    redirectToTale,
    isPopoverOpen,
    setIsPopoverOpen,
  };
};
