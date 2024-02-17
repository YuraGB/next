import { type ReactNode } from "react";
import { type Copyright } from ".prisma/client";

const CopyrightComponent = ({
  copyright,
}: {
  copyright: Copyright | undefined | null;
}): ReactNode | null => {
  if (!copyright) {
    return null;
  }

  return (
    <p className={"border-t-[0.1px] border-b-orange-200 bg-gray-900 p-4 text-[12px] text-amber-50"}>
      {`©${copyright.year} ${copyright.owner} ${copyright.content}`}
    </p>
  );
};

export default CopyrightComponent;
