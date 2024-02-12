import { type FC, memo, type ReactNode } from "react";
import CommentComponent from "@/modules/comments/components/Comment/Comment";
import { type Comment } from ".prisma/client";

type TProps = {
  messages: Comment[] | undefined | null;
  onDelete: (id: string) => void;
  isAdmin?: boolean;
  status?: string;
};

const ListOfMessages: FC<TProps> = ({ messages, status, isAdmin, onDelete }): null | ReactNode => {
  if (!messages) {
    return null;
  }
  const sortedMessages = messages.sort((a: Comment, b: Comment) => {
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
