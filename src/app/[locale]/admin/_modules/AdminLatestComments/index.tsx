"use client";
import { useGetComments } from "@admin/_modules/AdminLatestComments/api/useGetComments";
import { type Comment } from ".prisma/client";
import { type ReactNode } from "react";
import { FormattedMessage } from "react-intl";

const AdminLatestComments = (): ReactNode | null => {
  const { data, error, isLoading } = useGetComments();
  if (!data) return null;

  return (
    <section className={"relative mt-4 flex  w-full max-w-full flex-col p-2"}>
      <h3 className={"text-center font-bold text-foreground"}>
        <FormattedMessage id={"latest.comments.title"} defaultMessage={"Latest comments"} />
      </h3>
      <div>
        {isLoading && "Loading..."}
        {error && "Error: " + error.message}
        {(data as Comment[])
          .sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt))
          .map((comment) => (
            <div
              key={comment.id}
              className={"mb-3 flex w-full flex-col border-1 border-cyan-950 bg-foreground-200"}
            >
              <p className={"text-center text-lg text-foreground"}>{comment.content}</p>
              <p className={"text-right text-sm"}>{comment.createdAt.toLocaleString()}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AdminLatestComments;
