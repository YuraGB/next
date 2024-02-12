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

  const { onUpdateTale, data: updatedTale } = useUpdateTaleHandler();
  const { onAddTale, data: newTale } = useAddNewTale();

  useEffect(() => {
    if (newTale ?? updatedTale) {
      // clear data after submit and close popUp
      reset();
      onClose();
    }
  }, [newTale, onClose, reset, updatedTale]);

  useEffect(() => {
    // clear the form
    reset({});
  }, [initialValues, reset]);

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
  }, [{ ...errors }, initialFields, initialValues, register, setValue]);

  const onSubmit: SubmitHandler<Partial<Tale>> = async (data) => {
    const normalizeData = formatTaleData(data);

    if (initialValues) {
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
