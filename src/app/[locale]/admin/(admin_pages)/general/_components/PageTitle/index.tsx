"use client";

import { FormattedMessage } from "react-intl";
import React, { type ReactNode } from "react";

const PageTitle = (): ReactNode => {
  return (
    <h1 className={"mb-4 text-2xl font-bold"}>
      <FormattedMessage id={"admin.general.title"} defaultMessage={"General configurations"} />{" "}
    </h1>
  );
};

export default PageTitle;
