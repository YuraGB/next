"use client";
import { useResetPasswordForm } from "@/app/[locale]/(auth)/forgotPassword/[token]/_modules/ResetPasswordForm/useResetPasswordForm";
import { type ReactNode } from "react";
import { Button } from "@nextui-org/react";
import { FormattedMessage } from "react-intl";

export type ResetPasswordFormProps = {
  userId: string;
};

export const ResetPasswordForm = ({ userId }: ResetPasswordFormProps): ReactNode => {
  const { handleSubmit, onSubmit, formFields, isLoading } = useResetPasswordForm(userId);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"w-full max-w-screen-sm p-4 sm:p-12"}>
      <h3>
        <FormattedMessage id={"forgot.password.title"} defaultMessage={"Password recovery"} />
      </h3>
      {formFields}
      <Button variant={"solid"} type="submit" isLoading={isLoading} disabled={isLoading}>
        <FormattedMessage id={"forgot.password.submit"} defaultMessage={"Apply new password"} />
      </Button>
    </form>
  );
};
