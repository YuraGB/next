import { Input, Textarea } from "@nextui-org/input";
import type { Fields } from "@/modules/types/formTypes";
import React, { Fragment, type ReactNode } from "react";
import type { FieldError } from "react-hook-form/dist/types/errors";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import SingleImageDropzoneUsage from "@/modules/uploadFiles/components/SingleUpload";
import { type Image } from ".prisma/client";
import { MultiImageDropzoneUsage } from "@/modules/uploadFiles/components/MultipleUpload";

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
    validateCb,
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
            required: true,
            pattern,
            maxLength: rest.maxLength,
            minLength: rest.minLength,
            validate: validateCb,
          })}
          isInvalid={Boolean(errors)}
          errorMessage={errors ? errorMessage : ""}
          description={description}
          autoComplete={autoComplete}
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
        <Fragment>
          <label>{label}</label>
          <SingleImageDropzoneUsage
            setMainImage={setValue}
            error={errors}
            {...register(name as keyof Fields, {
              required: errorMessage ?? required,
              pattern,
            })}
            defaultValue={defaultValue as Image}
          />
        </Fragment>
      );
    case "uploadMultipleImages":
      return (
        <Fragment>
          <label>{label}</label>
          <MultiImageDropzoneUsage
            setImage={setValue}
            error={errors}
            defaultValue={defaultValue as Image[]}
          />
        </Fragment>
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
