import { useForm } from "react-hook-form";
import { type IContactUs } from "@/server/actions/ContactUsService/addContactUsMessage";
import type React from "react";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import fields from "@/app/[locale]/contacts/_components/ContactUsForm/fields";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useContuctUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<IContactUs>>();

  const formFields: React.ReactNode[] = formFieldsMapping(fields, errors, register);

  const onSubmit = (data: Partial<IContactUs>): void => {
    console.log(data);
  };

  return {
    formFields,
    onSubmit,
    handleSubmit,
    isValid,
  };
};
