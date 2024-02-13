import { Input, Textarea } from "@nextui-org/input";
import type { Fields } from "@/modules/types/formTypes";
import React, { type ReactNode } from "react";
import type { FieldError } from "react-hook-form/dist/types/errors";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import SingleImageDropzoneUsage from "@/modules/uploadFiles/components/SingleUpload";
import { type Image } from ".prisma/client";

type TProps = {
  errors: FieldError | undefined;
  register: UseFormRegister<FieldValues>;
  setValue?: UseFormSetValue<Partial<FieldValues>>;
} & Fields;

const FormField = (props: TProps): ReactNode => {
  const {
    type,
    name,
    label,
    required,
    errorMessage,
    pattern,
    setValue,
    description,
    autoComplete,
    errors,
    defaultValue,
    register,
    ...rest
  } = props;

  switch (type) {
    case "text":
      return (
        <Input
          isRequired={required}
          type={type}
          label={label}
          defaultValue={defaultValue as string}
          {...register(name as keyof Fields, {
            required: errorMessage ?? required,
            pattern,
          })}
          isInvalid={Boolean(errors)}
          errorMessage={errors ? errorMessage : ""}
          description={description}
          autoComplete={autoComplete}
          {...rest}
        />
      );
    case "textarea":
      return (
        <Textarea
          label={label}
          isRequired={required}
          className="w-full"
          {...rest}
          {...register(name as keyof Fields, {
            required: errorMessage ?? required,
            pattern,
          })}
          defaultValue={defaultValue as string}
        />
      );
    case "uploadSingleImage":
      return (
        <SingleImageDropzoneUsage
          setMainImage={setValue}
          error={errors}
          {...register(name as keyof Fields, {
            required: errorMessage ?? required,
            pattern,
          })}
          defaultValue={defaultValue as Image}
        />
      );
    default:
      return (
        <Input
          isRequired={required}
          type={type}
          label={label}
          defaultValue={defaultValue as string}
          {...register(name as keyof Fields, {
            required: errorMessage ?? required,
            pattern,
          })}
          isInvalid={Boolean(errors)}
          errorMessage={errors ? errorMessage : ""}
          description={description}
          autoComplete={autoComplete}
          {...rest}
        />
      );
  }
};

export default FormField;
