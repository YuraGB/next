import { type SubmitHandler, useForm } from "react-hook-form";
import { type Fields } from "@/modules/types/formTypes";
import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useEffect, useMemo } from "react";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";
import { useAddNewUser } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/service/useAddNewUser";
import useUpdateUser from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/service/useUpdateUser";

import fields from "./fields";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUserPopup = (initialValues: User | null, onClose: () => void = () => undefined) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<User>>();
  const initialFields: Fields[] = fields;

  const { data: newUser, error: createUserError, onAddUser } = useAddNewUser();
  const { updatedUser, error: updateError, mutate: onUpdate } = useUpdateUser();

  useEffect(() => {
    if (newUser ?? updatedUser) {
      // clear data after submit and close popUp
      reset();
      onClose();
    }
  }, [newUser, onClose, reset, updatedUser]);

  useEffect(() => {
    // clear the form
    reset({});
  }, [initialValues, reset]);

  const formFields: React.ReactNode[] = useMemo(() => {
    let fieldsWithDefaultValues: Fields[] = [];
    if (initialValues) {
      fieldsWithDefaultValues = fields.map((field: Fields) => {
        if (initialValues && field.name && initialValues[field.name as keyof User] !== undefined) {
          return {
            defaultValue: initialValues[field.name as keyof User] as string,
            ...field,
          };
        }
        return field;
      });
    }

    return formFieldsMapping(
      initialValues ? fieldsWithDefaultValues : initialFields,
      errors,
      register
    );
  }, [errors, initialFields, initialValues, register]);

  const onSubmit: SubmitHandler<Partial<User>> = async (userData) => {
    if (initialValues) {
      const normalizeData = {
        ...initialValues,
        ...userData,
      };

      onUpdate(normalizeData);
    } else if (userData.email && userData.name && userData.role) {
      const newUserData = {
        data: {
          name: userData.name,
          email: userData.email,
          role: userData.role,
          hashPassword: "",
        },
        select: {
          email: true,
          hashPassword: true,
        },
      };

      onAddUser(newUserData);
    }
  };

  return {
    formFields,
    handleSubmit,
    isValid,
    onSubmit,
    createUserError,
    updateError,
    onAddUser,
    onUpdate,
    register,
  };
};
