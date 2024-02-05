import React, { type FC, memo, type ReactNode, useCallback, useEffect, useState } from "react";
import { type CommentWithUser } from "@/server/actions/types";
import Author from "@/modules/comments/components/Author/Author";
import RemoveButton from "@/components/removeButton";
import { Skeleton } from "@nextui-org/skeleton";

type TProps = {
  comment: CommentWithUser | null;
  onDelete: (id: string) => void;
  isAdmin?: boolean;
  status?: string;
};
const CommentComponent: FC<TProps> = ({ comment, isAdmin, onDelete, status }): ReactNode | null => {
  const [mounted, setMounted] = useState<boolean>(false);

  const onDeleteHandler = useCallback(
    (id: string) => () => {
      onDelete(id);
    },
    [onDelete]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!comment || !mounted) {
    return null;
  }

  if (status === "loading") {
    return <Skeleton className={"h-20 w-full"} />;
  }

  return (
    <section className={"relative"}>
      <div className={"my-3 inline-block w-full bg-white p-2"}>
        <Author author={comment.user} />
        <p className={"flex border-b-1 px-3 py-5 text-foreground-50"}>{comment.content}</p>
        <small className={"flex justify-end p-2 text-[12px] text-gray-600"}>
          {new Date(comment.createdAt).toLocaleDateString()}
        </small>
        {isAdmin === true ? (
          <div className={"absolute right-5 top-5"}>
            <RemoveButton onClick={onDeleteHandler(comment.id)} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default memo(CommentComponent);
