import { type Fields } from "@/modules/types/formTypes";
import React from "react";
import { type FieldError, type FieldErrors } from "react-hook-form/dist/types/errors";
import { type UseFormRegister, type UseFormSetValue } from "react-hook-form/dist/types/form";
import { type FieldValues } from "react-hook-form/dist/types/fields";
import FormField from "@/modules/utils/FormField";

export default function formFieldsMapping(
  fields: Fields[],
  errors: FieldErrors<FieldValues>,
  register: UseFormRegister<FieldValues>,
  setValue?: UseFormSetValue<Partial<FieldValues>>
): React.ReactNode[] {
  return fields.map(
    ({
      type,
      name,
      label,
      required,
      errorMessage,
      pattern,
      description,
      autoComplete,
      additionalClasses,
      defaultValue,
      ...rest
    }: Fields) => (
      <div className={`mb-6 ${additionalClasses}`} key={label + name}>
        <FormField
          errors={errors[name] as FieldError | undefined}
          register={register}
          type={type}
          required={required}
          label={label}
          pattern={pattern}
          description={description}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          name={name}
          errorMessage={errorMessage}
          setValue={setValue}
          {...rest}
        />
      </div>
    )
  );
}
