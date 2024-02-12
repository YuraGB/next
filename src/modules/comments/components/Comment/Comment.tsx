import React, { type FC, memo, type ReactNode } from "react";
import RemoveButton from "@/components/removeButton";
import { Skeleton } from "@nextui-org/skeleton";
import Avatar from "@/modules/comments/components/Avatar/Avatar";
import { useComment } from "@/modules/comments/components/Comment/useComment";
import { type Comment } from ".prisma/client";

export type TProps = {
  comment: Comment | null;
  onDelete: (id: string) => void;
  isAdmin?: boolean;
  status?: string;
  isOdd?: boolean;
};
const CommentComponent: FC<TProps> = (props): ReactNode | null => {
  const { onDeleteHandler, mounted, numberOfThePet } = useComment(props);
  const { isOdd, isAdmin, status, comment } = props;
  if (!comment || !mounted) {
    return null;
  }

  if (status === "loading") {
    return <Skeleton className={"h-20 w-full"} />;
  }

  return (
    <section
      className={`relative flex flex-col ${
        isOdd ? "items-end" : "items-start"
      } m-auto w-full max-w-[768px]`}
    >
      <div className={`comment ${isOdd ? "" : "odd"} `}>
        <p className={"flex w-full border-b-1 px-3 py-5 text-foreground-50"}>{comment.content}</p>
        <div className={"flex w-full justify-end"}>
          <small className={"flex justify-end p-2 text-[12px] text-gray-600"}>
            {new Date(comment.createdAt).toLocaleDateString()}
          </small>
        </div>
        {isAdmin === true ? (
          <div className={"absolute right-5 top-5"}>
            <RemoveButton onClick={onDeleteHandler(comment.id)} />
          </div>
        ) : null}
      </div>
      <Avatar numberOfThePet={numberOfThePet} />
    </section>
  );
};

export default memo(CommentComponent);
