"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { useSignUp } from "@/app/[locale]/(auth)/signUp/components/registrationForm/useSignUp";
import { FormattedMessage } from "react-intl";

export const RegistrationForm = (): React.ReactNode => {
  const { onSubmit, formFields, handleSubmit, loading } = useSignUp();
  return (
    <form
      className={"mt-3 flex w-full max-w-xl flex-wrap bg-white p-4"}
      aria-label={"registration form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {formFields}
      <Button
        variant={"flat"}
        color={"primary"}
        fullWidth={true}
        className={"mb-4"}
        isLoading={loading}
        type={"submit"}
      >
        <FormattedMessage id={"sign_up_button"} />
      </Button>
    </form>
  );
};
