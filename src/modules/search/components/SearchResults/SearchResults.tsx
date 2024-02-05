import { type FC, memo, type ReactNode } from "react";
import { LoaderIcon } from "react-hot-toast";
import ListSearchResults, {
  type TaleWithCategory,
} from "@/modules/search/components/ListSearchResults/ListSearchResults";

type SearchResultsProps = {
  isLoading: boolean;
  searchResults: TaleWithCategory[] | string | [];
  error: Error | null;
  onClick: (id: string) => void;
};
const SearchResults: FC<SearchResultsProps> = ({
  isLoading,
  searchResults,
  error,
  onClick,
}): ReactNode | null => {
  console.log(searchResults);
  if (isLoading) {
    return <LoaderIcon className={"my-5"} />;
  }

  if (!searchResults?.length || error) {
    return null;
  }

  return <ListSearchResults results={searchResults} onClick={onClick} />;
};

export default memo(SearchResults);
