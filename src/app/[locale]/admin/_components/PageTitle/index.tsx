"use client";

import { FormattedMessage } from "react-intl";
import React, { type ReactNode } from "react";

const PageTitle = (): ReactNode => {
  return (
    <h1 className={"mb-4 text-2xl font-bold"}>
      <FormattedMessage id={"admin.hp.title"} defaultMessage={"Admin Page Home"} />{" "}
    </h1>
  );
};

export default PageTitle;
