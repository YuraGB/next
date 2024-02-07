import { type Fields } from "@/modules/types/formTypes";
import { Input, Textarea } from "@nextui-org/input";
import React from "react";
import { type FieldErrors } from "react-hook-form/dist/types/errors";
import { type UseFormRegister } from "react-hook-form/dist/types/form";
import { type FieldValues } from "react-hook-form/dist/types/fields";

export default function formFieldsMapping(
  fields: Fields[],
  errors: FieldErrors<Fields>,
  register: UseFormRegister<FieldValues>
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
        {type === "textarea" ? (
          <Textarea
            label={label}
            isRequired={required}
            className="w-full"
            {...rest}
            {...register(name as keyof Fields, {
              required,
              pattern,
            })}
            defaultValue={defaultValue}
          />
        ) : (
          <Input
            isRequired={required}
            type={type}
            label={label}
            defaultValue={defaultValue}
            {...register(name as keyof Fields, {
              required,
              pattern,
            })}
            isInvalid={Boolean(errors[name as keyof Fields])}
            errorMessage={errors[name as keyof Fields] ? errorMessage : ""}
            description={description}
            autoComplete={autoComplete}
            {...rest}
          />
        )}
      </div>
    )
  );
}
