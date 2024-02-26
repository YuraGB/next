import { Fragment, type ReactNode, useMemo } from "react";
import Paragraph from "@/app/[locale]/fairyTales/[id]/_components/paragraph";
import { type TTaleWithRelations } from "@/app/[locale]/fairyTales/[id]/_api/useGetOneTale";

export const useNormalizeContent = (data: TTaleWithRelations): ReactNode[] | [] => {
  return useMemo(() => {
    if (data?.content) {
      return data.content
        .split(/\n/g)
        .filter((e) => e)
        .map((paragraph, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={i + "p"}>
            <Paragraph content={paragraph} image={data?.images?.[i]} isOdd={i % 2 === 0} />
            <br />
          </Fragment>
        ));
    }
    return [];
  }, [data?.content, data?.images]);
};
