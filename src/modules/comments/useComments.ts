import { useDeleteCommentService } from "@/modules/comments/components/service/useDeleteCommentService";
import { useSession } from "next-auth/react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useComments = (taleId: string) => {
  const { data: sessionData } = useSession();
  const { mutate, status, error, data } = useDeleteCommentService(taleId);

  const isAdmin = sessionData?.user?.role === "ADMIN";
  const onDelete = (id: string): void => {
    if (isAdmin && id) {
      mutate(id);
    }
  };

  return {
    isAdmin,
    onDelete,
    status,
    error,
    data,
  };
};
