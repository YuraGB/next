import { type FC, memo, type ReactNode } from "react";
import { LoaderIcon } from "react-hot-toast";
import ListSearchResults from "@/modules/search/components/ListSearchResults/ListSearchResults";
import { type SearchTaleResponse } from "@/server/actions/TaleServices/types";

type SearchResultsProps = {
  isLoading: boolean;
  searchResults: SearchTaleResponse[] | string | [];
  error: Error | null;
  onClick: (id: string) => void;
};
const SearchResults: FC<SearchResultsProps> = ({
  isLoading,
  searchResults,
  error,
  onClick,
}): ReactNode | null => {
  if (isLoading) {
    return <LoaderIcon className={"my-5"} />;
  }

  if (!searchResults?.length || error) {
    return null;
  }

  return <ListSearchResults results={searchResults} onClick={onClick} />;
};

export default memo(SearchResults);
