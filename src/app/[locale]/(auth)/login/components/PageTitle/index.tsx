"use client";
import { FormattedMessage } from "react-intl";
import { type ReactNode } from "react";

const PageTitle = (): ReactNode => {
  return (
    <h1>
      <FormattedMessage id={"login.title"} defaultMessage={"Login"} />
    </h1>
  );
};

export default PageTitle;
