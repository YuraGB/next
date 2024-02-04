import { type Tale } from ".prisma/client";
import { type FC, memo, type ReactNode } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { type CategoryTale } from "@prisma/client";

type ResultItemT = {
  tale: Partial<Tale> & { categoryTale: CategoryTale | undefined };
  onClick: (id: string) => void;
};

const ResultItem: FC<ResultItemT> = ({ tale, onClick }): ReactNode | null => {
  if (!tale) {
    return null;
  }

  const { id } = tale;

  return (
    <Card
      className="my-2 py-4"
      isPressable={true}
      onClick={() => {
        id && onClick(id);
      }}
    >
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase">{tale.title}</p>
        <small className="text-default-500">
          {tale.categoryTale?.name ? tale.categoryTale.name : tale.forAge}
        </small>
        <h4 className="text-left text-sm font-light">{tale.shortDescription}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="rounded-xl object-cover"
          src={tale.mainImage ?? ""}
          width={270}
          height={400}
        />
      </CardBody>
    </Card>
  );
};

export default memo(ResultItem);
