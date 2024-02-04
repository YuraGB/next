"use client";
import React, { memo } from "react";
import { Button } from "@nextui-org/button";
import { useLoginForm } from "@/app/[locale]/(auth)/login/components/loginForm/useLoginForm";

export type LoginFormType = {
  redirectUrl: string;
};

const LoginForm = ({ redirectUrl }: LoginFormType): React.ReactNode => {
  const { formFields, onSubmit, handleSubmit } = useLoginForm({ redirectUrl });
  return (
    <article className={"mt-3 flex flex-col justify-center"}>
      <form
        className="mb-4 w-[500px] rounded bg-white px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
        aria-label={"Login in form"}
      >
        {formFields}
        <div className="flex flex-wrap items-center justify-between">
          <Button
            variant={"flat"}
            type={"submit"}
            color={"primary"}
            fullWidth={true}
            className={"mb-4"}
            role={"button"}
            aria-labelledby={"login in button"}
            data-cy={"login-in-button"}
          >
            Login in
          </Button>
          <a
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="/forgotPassword"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </article>
  );
};

export default memo(LoginForm);
