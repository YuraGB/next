import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Inputs } from "@/modules/types/formTypes";
import fields from "@/app/[locale]/(auth)/forgotPassword/components/forgotPasswordForm/fields";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";

export const useForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>();

  //todo
  const onSubmit: SubmitHandler<Partial<Inputs>> = (data) => {
    console.log(data);
  };

  const formFields: React.ReactNode[] = formFieldsMapping(fields, errors, register);

  return {
    formFields,
    handleSubmit,
    onSubmit,
    isValid,
  };
};
