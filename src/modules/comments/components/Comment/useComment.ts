import { type TProps } from "@/modules/comments/components/Comment/Comment";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useComment = (props: TProps) => {
  const { comment, onDelete } = props;

  const [mounted, setMounted] = useState<boolean>(false);

  const onDeleteHandler = useCallback(
    (id: string) => () => {
      onDelete(id);
    },
    [onDelete]
  );

  const numberOfThePet = useMemo(() => {
    if (comment?.avatar) {
      return comment.avatar;
    }

    return undefined;
  }, [comment?.avatar]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { onDeleteHandler, mounted, numberOfThePet };
};
