import { type FC } from "react";
import { type Copyright } from ".prisma/client";
import { useCopyright } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/Copyright/useCopyright";
import CopyrightForm from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/Copyright/CopyrightForm";

const CopyrightAdmin: FC<{ copyrightBlock?: Copyright | null }> = ({ copyrightBlock }) => {
  const { content, owner, year } = copyrightBlock ?? {};
  const { isLoading, onSubmit } = useCopyright(copyrightBlock);

  return (
    <CopyrightForm
      content={content}
      owner={owner}
      year={year}
      isLoading={isLoading}
      onSubmit={onSubmit}
    />
  );
};

export default CopyrightAdmin;
