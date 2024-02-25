"use client";
import React, { memo } from "react";
import { Button } from "@nextui-org/button";
import { useForgotPasswordForm } from "@/app/[locale]/(auth)/forgotPassword/components/forgotPasswordForm/useForgotPasswordForm";
import { FormattedMessage } from "react-intl";

const ForgotPasswordForm = (): React.ReactNode => {
  const { formFields, onSubmit, isLoading, handleSubmit } = useForgotPasswordForm();
  return (
    <article className={"mt-3 flex flex-col justify-center"}>
      <form
        aria-label={"Forgot password form"}
        className="mb-4 w-[500px] rounded bg-white px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formFields}
        <div className="flex flex-wrap items-center justify-between">
          <Button
            variant={"flat"}
            color={"primary"}
            fullWidth={true}
            className={"mb-4"}
            isLoading={isLoading}
            type={"submit"}
            disabled={isLoading}
          >
            <FormattedMessage id="sendRecoveryLetter" defaultMessage="Send me recovery letter" />
          </Button>
        </div>
      </form>
    </article>
  );
};

export default memo(ForgotPasswordForm);
