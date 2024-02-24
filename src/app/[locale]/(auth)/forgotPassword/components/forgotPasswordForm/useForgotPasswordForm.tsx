import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Inputs } from "@/modules/types/formTypes";
import fields from "@/app/[locale]/(auth)/forgotPassword/components/forgotPasswordForm/fields";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import { useResetPassword } from "@/app/[locale]/(auth)/forgotPassword/components/forgotPasswordForm/api/resetPasswordApi";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>();

  const { mutate: sendEmail, status, error } = useResetPassword();
  console.log(status, error);

  const onSubmit: SubmitHandler<Partial<Inputs>> = (data) => {
    sendEmail({
      receiver: data.email!,
      subject: "Reset password",
      react: "ResetEmail",
    });
  };

  const formFields: React.ReactNode[] = formFieldsMapping(fields, errors, register);

  return {
    formFields,
    handleSubmit,
    onSubmit,
    isValid,
  };
};
