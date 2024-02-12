import { type FC, memo } from "react";
import { type CommentWithUser } from "@/server/actions/types";
import CommentComponent from "@/modules/comments/components/Comment/Comment";

type TProps = {
  messages: CommentWithUser[] | undefined | null;
  onDelete: (id: string) => void;
  isAdmin?: boolean;
  status?: string;
};

const ListOfMessages: FC<TProps> = ({ messages, status, isAdmin, onDelete }) => {
  if (!messages) {
    return null;
  }
  const sortedMessages = messages.sort((a: CommentWithUser, b: CommentWithUser) => {
    return Number(b.createdAt) - Number(a.createdAt);
  });

  return (
    <section className={"my-2 flex flex-col overflow-hidden"}>
      {sortedMessages.map((message, index) => (
        <CommentComponent
          key={message.id}
          comment={message}
          isAdmin={isAdmin}
          status={status}
          onDelete={onDelete}
          isOdd={index % 2 === 0}
        />
      ))}
    </section>
  );
};

export default memo(ListOfMessages);
