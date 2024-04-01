"use client";
import { FormattedMessage } from "react-intl";
import React, { type ReactNode } from "react";

const PageTitle = (): ReactNode => {
  return (
    <h1>
      <FormattedMessage id={"registration.title"} defaultMessage={"Registration"} />{" "}
    </h1>
  );
};

export default PageTitle;
