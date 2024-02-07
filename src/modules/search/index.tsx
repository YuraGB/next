import { Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { memo, type ReactNode, type SyntheticEvent } from "react";
import { SearchIcon } from "@nextui-org/shared-icons";
import InputSearch from "@/modules/search/components/InputSearch/InputSearch";
import { useInputSearch } from "@/modules/search/useInputSearch";
import SearchResults from "@/modules/search/components/SearchResults/SearchResults";

const Search = (): ReactNode => {
  const {
    searchResults,
    error,
    isLoading,
    onChangeHandler,
    redirectToTale,
    isPopoverOpen,
    searchValue,
    setIsPopoverOpen,
    clearSearch,
  } = useInputSearch();

  const onClose = (e: SyntheticEvent<HTMLElement>): void => {
    const isClickOnContent = (e.target as HTMLElement)?.closest('[data-slot="content"]');
    if (!isClickOnContent) {
      setIsPopoverOpen(false);
    }
  };

  return (
    <li className={"relative"}>
      <Popover
        showArrow
        backdrop="opaque"
        onClick={onClose}
        placement="bottom-end"
        shouldCloseOnBlur={true}
        isOpen={isPopoverOpen}
        classNames={{
          arrow: ["sm:block hidden"],
          base: [
            "before:bg-default-200",
            "w-[500px] max-w-full rounded-0",
            "max-w-full",
            "md:w-[500px]",
            "w-[100vw]",
          ],
          content: [
            "py-3 px-4 border border-default-200",
            "bg-gradient-to-br from-white to-default-300",
            "dark:from-default-100 dark:to-default-50",
            "rounded-0",
            "max-w-full",
          ],
        }}
      >
        <PopoverTrigger>
          <Button
            isIconOnly={true}
            aria-labelledby={"Search button"}
            aria-label={"Search button"}
            role={"button"}
            title={"Search button"}
            onClick={() => {
              setIsPopoverOpen((st) => !st);
            }}
          >
            <SearchIcon aria-labelledby={"Search icon"} />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <InputSearch
            onChange={onChangeHandler}
            isValue={Boolean(searchValue)}
            clearSearch={clearSearch}
          />
          <SearchResults
            searchResults={searchResults}
            error={error}
            onClick={redirectToTale}
            isLoading={isLoading}
          />
        </PopoverContent>
      </Popover>
    </li>
  );
};

export default memo(Search);
