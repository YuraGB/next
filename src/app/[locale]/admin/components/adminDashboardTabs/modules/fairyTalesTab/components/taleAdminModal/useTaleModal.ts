import fields from "./fields";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Fields } from "@/modules/types/formTypes";

import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useEffect, useMemo } from "react";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import { type Tale } from ".prisma/client";
import { formatTaleData } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/util/formatData";
import useUpdateTaleHandler from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/service/updateTaleHandler";
import { useAddNewTale } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/service/useAddNewTale";
import toast from "react-hot-toast";

export type TSubmit = Omit<Tale, "id" | "ratingId" | "createdAt" | "imageId" | "images">;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTaleModal = (initialValues: Tale | null, onClose: () => void = () => undefined) => {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Tale>>();
  const initialFields: Fields[] = fields;

  const { onUpdateTale, data: updatedTale, error: errorUpdate } = useUpdateTaleHandler();
  const { onAddTale, data: newTale, error: errorOnCreate } = useAddNewTale();

  useEffect(() => {
    if (newTale ?? updatedTale) {
      // clear data after submit and close popUp
      reset();
      onClose();
    }

    if (newTale) {
      toast.success("The tale has been created");
    }

    if (updatedTale) {
      toast.success("The tale has been updated");
    }
  }, [newTale, onClose, reset, updatedTale]);

  useEffect(() => {
    // clear the form
    reset({});
  }, [initialValues, reset]);

  useEffect(() => {
    if (errorOnCreate) {
      toast.error("There is an error during creating the tale");
    }

    if (errorUpdate) {
      toast.error("There is an error during updating tale. Please, try again later.");
    }
  }, [errorOnCreate, errorUpdate]);

  const arrayOfTheErrors = Array.from(Object.keys(errors));

  const formFields: React.ReactNode[] = useMemo(() => {
    let fieldsWithDefaultValues: Fields[] = [];
    if (initialValues) {
      fieldsWithDefaultValues = fields.map((field: Fields) => {
        if (initialValues && field.name && initialValues[field.name as keyof Tale] !== undefined) {
          return {
            defaultValue: initialValues[field.name as keyof Tale] as string,
            ...field,
          };
        }
        return field;
      });
    }

    return formFieldsMapping(
      initialValues ? fieldsWithDefaultValues : initialFields,
      errors,
      register,
      setValue
    );
  }, [arrayOfTheErrors, initialFields, initialValues, register, setValue]);

  const onSubmit: SubmitHandler<Partial<TSubmit>> = async (data) => {
    const normalizeData = formatTaleData(data);
    if (initialValues?.id) {
      onUpdateTale({ id: initialValues.id, updateTaleData: normalizeData });
    } else {
      onAddTale(normalizeData);
    }
  };

  return {
    formFields,
    handleSubmit,
    isValid,
    onSubmit,
    errors,
    register,
  };
};
