import { type SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useMemo, useEffect } from "react";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import fields from "@/app/[locale]/(auth)/forgotPassword/[token]/_modules/ResetPasswordForm/fields";
import { type UseFormHandleSubmit } from "react-hook-form/dist/types/form";
import { type FieldValues } from "react-hook-form/dist/types/fields";
import { useUpdateUserPassword } from "@/app/[locale]/(auth)/forgotPassword/[token]/_modules/ResetPasswordForm/api/useUpdateUserPassword";

export type TSubmitDataResetPassword = {
  password: string;
  confirmPassword: string;
};

export type TUseResetPasswordForm = {
  formFields: React.ReactNode[];
  onSubmit: (data: Partial<TSubmitDataResetPassword>) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  isValid: boolean;
  isLoading: boolean;
};

export const useResetPasswordForm = (userId: string): TUseResetPasswordForm => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Partial<TSubmitDataResetPassword>>();

  const passwordFields = watch(["password", "confirmPassword"]);

  const { mutate: updateHandler, data: updatedUser, status, error } = useUpdateUserPassword();

  useEffect(() => {
    if (updatedUser) {
      toast.success("Password updated");
    }
  }, [updatedUser]);

  useEffect(() => {
    if (error) {
      toast.error("Error updating password");
    }
  }, [error]);

  const updateFields = useMemo(
    () =>
      fields.map((field) => {
        if (field.name === "password") {
          return {
            ...field,
            validateCb: (value: string) => value !== passwordFields[1],
          };
        }
        if (field.name === "confirmPassword") {
          return {
            ...field,
            validateCb: (value: string) => value !== passwordFields[0],
          };
        }
        return field;
      }),
    []
  );

  const formFields: React.ReactNode[] = formFieldsMapping(updateFields, errors, register);

  const onSubmit: SubmitHandler<Partial<TSubmitDataResetPassword>> = (data) => {
    if (data.confirmPassword !== data.password) {
      toast.error("Passwords do not match");
      return;
    }

    updateHandler({
      id: userId,
      hashPassword: data.password,
    });
  };

  return { formFields, onSubmit, handleSubmit, isValid, isLoading: status === "pending" };
};
