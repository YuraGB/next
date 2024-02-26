"use client";
import { memo, type ReactNode, Suspense } from "react";
import { useTaleContent } from "@/app/[locale]/fairyTales/[id]/_components/useTaleContent";
import dynamic from "next/dynamic";
import { type TaleWithRelations } from "@/server/actions/types";
import { FormattedMessage } from "react-intl";
import MainImage from "@/app/[locale]/fairyTales/[id]/_components/MainImage";
import ShareComponent from "@/app/[locale]/fairyTales/[id]/_components/shareComponent";

const RatingComponent = dynamic(() => import("@/modules/rating/Rating"));
const Comments = dynamic(() => import("@/modules/comments"));

const TaleContent = ({
  taleContent,
}: {
  taleContent: Partial<TaleWithRelations>;
}): ReactNode | null => {
  const { forAge, mainImage, createdAt, title, content, comments, rating } =
    useTaleContent(taleContent);

  return (
    <article className={"w-full"}>
      <header className={"relative mb-8"}>
        <section className={"absolute flex size-full flex-col justify-between"}>
          <h1
            className={
              'mb-3 mt-[10%] text-center font-["Cinzel_Decorative"]  text-[32px] [color:white]'
            }
          >
            {title ? title : "Fairy Tale"}
          </h1>
          <div className={"flex justify-between p-4 text-amber-50"}>
            <em>Published : {Boolean(createdAt) && createdAt?.toLocaleDateString()}</em>
            <p>
              <em>Category: {forAge}</em>
            </p>
          </div>
        </section>

        <MainImage src={mainImage} alt={title ? title : "Fairy Tale"} />
      </header>
      <section className={"relative"}>{content}</section>

      <section className={"flex justify-between p-2"}>
        <Suspense fallback={null}>
          <RatingComponent taleId={taleContent.id} rating={rating} />
        </Suspense>
        <ShareComponent />
      </section>

      <section>
        <h3
          className={
            "mt-8 text-center text-[32px] text-amber-50 [text-shadow:-1px_1px_1px_#091001]"
          }
        >
          <FormattedMessage
            id={"comments.section"}
            defaultMessage={"You can leave comment below"}
          />{" "}
        </h3>
        <Suspense fallback={null}>
          <Comments shouldAddComment={true} messages={comments} taleId={taleContent.id} />
        </Suspense>
      </section>
    </article>
  );
};

export default memo(TaleContent);
