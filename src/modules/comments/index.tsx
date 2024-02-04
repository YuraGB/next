import InputMessage from "@/modules/comments/components/InputMessage/InputMessage";
import dynamic from "next/dynamic";
const ListOfMessages = dynamic(
  () => import("@/modules/comments/components/ListOfMessages/ListOfMessages")
);
import { type CommentWithUser } from "@/server/actions/types";
import { type FC, type ReactNode, Suspense } from "react";
import { useComments } from "@/modules/comments/useComments";

type TProps = {
  messages: CommentWithUser[] | undefined;
  shouldAddComment?: boolean;
  taleId?: string;
};

const Comments: FC<TProps> = ({ messages, shouldAddComment = false, taleId }): ReactNode | null => {
  const { onDelete, isAdmin, status } = useComments(taleId ?? "");
  if (!messages || (messages.length === 0 && !shouldAddComment)) {
    return null;
  }

  return (
    <section>
      <InputMessage isVisible={shouldAddComment} taleId={taleId} />
      <Suspense fallback={null}>
        <ListOfMessages messages={messages} onDelete={onDelete} isAdmin={isAdmin} status={status} />
      </Suspense>
    </section>
  );
};

export default Comments;
