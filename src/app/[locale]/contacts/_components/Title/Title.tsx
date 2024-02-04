"use client";
import { FormattedMessage } from "react-intl";
import { type ReactNode } from "react";

const Title = (): ReactNode => {
  return (
    <h1 className={"mb-3 items-center text-center text-[24px]"}>
      <FormattedMessage id={"contactUs.title"} defaultMessage={"You can leave the message to us"} />
    </h1>
  );
};

export default Title;
