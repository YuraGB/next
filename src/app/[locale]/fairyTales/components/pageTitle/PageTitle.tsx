"use client";
import { memo, type ReactNode } from "react";
import { FormattedMessage } from "react-intl";

const PageTitle = (): ReactNode => {
  return (
    <h1 className={"mb-4 text-[24px]"}>
      <FormattedMessage id={"catalog.page"} />
    </h1>
  );
};

export default memo(PageTitle);
