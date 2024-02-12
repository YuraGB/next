"use client";
import { memo, type ReactNode, Suspense } from "react";
import Image, { type StaticImageData } from "next/image";
import { useTaleContent } from "@/app/[locale]/fairyTales/[id]/components/useTaleContent";
import placeholder from "@/assets/placeholder.webp";
import dynamic from "next/dynamic";
import { type TaleWithRelations } from "@/server/actions/types";
import { FormattedMessage } from "react-intl";

const RatingComponent = dynamic(() => import("@/modules/rating/Rating"));
const Comments = dynamic(() => import("@/modules/comments"));

const TaleContent = ({
  taleContent,
}: {
  taleContent: Partial<TaleWithRelations>;
}): ReactNode | null => {
  const { forAge, mainImage, createdAt, title, content, comments, rating } =
    useTaleContent(taleContent);

  console.log(mainImage);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const image: string | StaticImageData = mainImage?.url ? mainImage.url : placeholder;

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
            <em>Published : {createdAt.toLocaleDateString()}</em>
            <p>
              <em>Category: {forAge}</em>
            </p>
          </div>
        </section>
        <Image
          width={700}
          height={200}
          alt="NextUI hero Image with delay"
          src={image}
          loading={"lazy"}
          className={"h-auto w-full object-cover"}
        />
      </header>
      <section className={"relative"}>{content}</section>
      <Suspense fallback={null}>
        <RatingComponent taleId={taleContent.id} rating={rating} />
      </Suspense>

      <section>
        <h3 className={"mt-8 text-center text-[32px] text-amber-50"}>
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
