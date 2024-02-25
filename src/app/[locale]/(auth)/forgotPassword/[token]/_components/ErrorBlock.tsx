"use client";
import { type ReactNode } from "react";
import { FormattedMessage } from "react-intl";

const ErrorBlock = ({ message }: { message: string }): ReactNode => {
  return (
    <div>
      <h1>
        <FormattedMessage id={"resetPassword.error"} defaultMessage={"There has been an error"} />
      </h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBlock;
