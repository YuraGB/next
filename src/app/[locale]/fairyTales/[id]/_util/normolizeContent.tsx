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
          <Fragment key={paragraph.slice(0, 7)}>
            <Paragraph content={paragraph} image={data?.images?.[i]} isOdd={i % 2 === 0} />
            <br />
          </Fragment>
        ));
    }
    return [];
  }, [data?.content, data?.images]);
};
