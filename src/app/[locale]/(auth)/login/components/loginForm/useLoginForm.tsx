"use client";
import { userLoginFields } from "@/app/[locale]/(auth)/login/components/loginForm/fields";
import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Inputs } from "@/modules/types/formTypes";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import { type LoginFormType } from "@/app/[locale]/(auth)/login/components/loginForm/LoginForm";
import toast from "react-hot-toast";
import signInService from "@/app/[locale]/(auth)/login/components/loginForm/service/signInService";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLoginForm = ({ redirectUrl }: LoginFormType) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>();
  const router = useRouter();
  const fields = userLoginFields();

  const onSubmit: SubmitHandler<Partial<Inputs>> = async (data): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (data) {
      try {
        const resp = await signInService(data);
        //eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (resp?.ok) {
          router.push(redirectUrl ? redirectUrl : "/");
        }
        //eslint-disable-next-line
        if (resp?.error) {
          toast.error("There is no such user");
        }
      } catch (e) {
        if (e instanceof Error) {
          toast.error(e.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    } else {
      toast.error("The login in fields are empty ");
    }
  };

  const formFields: React.ReactNode[] = formFieldsMapping(fields, errors, register);

  return {
    formFields,
    handleSubmit,
    onSubmit,
    isValid,
  };
};
