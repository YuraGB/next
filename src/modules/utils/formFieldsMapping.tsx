import { Fields } from '@/modules/types/formTypes'
import { Input, Textarea } from '@nextui-org/input'
import React from 'react'
import { FieldErrors } from 'react-hook-form/dist/types/errors'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FieldValues } from 'react-hook-form/dist/types/fields'

export default function formFieldsMapping(
  fields: Fields[],
  errors: FieldErrors<Fields>,
  register: UseFormRegister<FieldValues>
): React.ReactNode[] {
  return fields.map(
    (
      {
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
      }: Fields,
      index: number
    ) => (
      <div className={`mb-6 ${additionalClasses}`} key={label + index}>
        {type === 'textarea' ? (
          <Textarea
            label={label}
            className="w-full"
            {...rest}
            {...register(name as keyof Fields, {
              required: required,
              pattern: pattern,
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
              required: required,
              pattern: pattern,
            })}
            isInvalid={!!errors[name as keyof Fields]}
            errorMessage={errors[name as keyof Fields] ? errorMessage : ''}
            description={description}
            autoComplete={autoComplete}
            {...rest}
          />
        )}
      </div>
    )
  )
}
