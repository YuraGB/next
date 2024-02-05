import React from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { type Tale } from ".prisma/client";

const TaleAdminItem = ({
  tale,
  onEdit,
}: {
  tale: Tale;
  // eslint-disable-next-line no-shadow
  onEdit: (tale: Tale) => void;
}): React.ReactNode | null => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!tale) {
    return null;
  }

  const { id, title, forAge, createdAt } = tale;

  const onClick = (): void => {
    if (id) {
      onEdit(tale);
    }
  };

  return (
    <Card
      className="flex w-full max-w-full rounded-none"
      isPressable
      isBlurred
      isHoverable
      onClick={onClick}
    >
      <CardHeader className="relative flex gap-3 p-0">
        <div className="flex flex-col">
          <p className="p-3">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter className={"flex justify-between"}>
        <p className={"mr-2 text-sm text-foreground-100"}>Category: {forAge}</p>
        <p className={"text-sm text-foreground-100"}>Published: {createdAt.toLocaleDateString()}</p>
      </CardFooter>
    </Card>
  );
};

export default React.memo(TaleAdminItem);
