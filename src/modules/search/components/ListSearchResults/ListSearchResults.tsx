import { type FC, memo, type ReactNode } from "react";
import ResultItem from "@/modules/search/components/ResultItem/ResultItem";
import { type SearchTaleResponse } from "@/server/actions/TaleServices/types";

type ListResultsT = {
  results: SearchTaleResponse[] | string | [];
  onClick: (id: string) => void;
};

const ListSearchResults: FC<ListResultsT> = ({ results, onClick }): ReactNode | null => {
  if (!results?.length) {
    return null;
  }

  if (typeof results === "string") {
    return <p className={"flex justify-center p-4"}>{results}</p>;
  }

  return (
    <section>
      {results.map((tale) => (
        <ResultItem key={tale.id} tale={tale} onClick={onClick} />
      ))}
    </section>
  );
};

export default memo(ListSearchResults);
