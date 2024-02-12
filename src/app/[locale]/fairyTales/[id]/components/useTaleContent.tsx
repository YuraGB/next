import { Fragment, useMemo } from "react";
import Paragraph from "@/app/[locale]/fairyTales/[id]/components/paragraph";
import { type TaleWithRelations } from "@/server/actions/types";
import { useQuery } from "@tanstack/react-query";
import { getTale } from "@/server/actions/getTale";
import { GET_ONE_TALE } from "@/server/actions/queryNaming";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTaleContent = (taleData: Partial<TaleWithRelations>) => {
  const { data } = useQuery({
    queryKey: [GET_ONE_TALE, taleData.id],
    queryFn: () => getTale(taleData.id ? taleData.id : ""),
    initialData: taleData,
    enabled: Boolean(taleData.id),
  });

  const normalizeContent = useMemo(() => {
    if (data?.content) {
      return data.content
        .split(/\n/g)
        .filter((e) => e)
        .map((paragraph, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={i + "p"}>
            <Paragraph
              content={paragraph}
              image={data?.images ? data.images[i] : undefined}
              isOdd={i % 2 === 0}
            />
            <br />
          </Fragment>
        ));
    }
    return [];
  }, [data?.content, data?.images]);

  return {
    forAge: data?.forAge,
    mainImage: data?.mainImage,
    createdAt: data?.createdAt,
    images: data?.images,
    shortDescription: data?.shortDescription,
    title: data?.title,
    comments: data?.comments,
    content: normalizeContent,
    rating: data?.rating,
  };
};
