import { Fields, Inputs } from '@/modules/types/formTypes'
import { Input, Textarea } from '@nextui-org/input'
import React from 'react'
import { FieldErrors } from 'react-hook-form/dist/types/errors'
import { UseFormRegister } from 'react-hook-form/dist/types/form'

export default function formFieldsMapping<T extends keyof Inputs>(
  fields: Fields[],
  errors: FieldErrors<Pick<Inputs, T>>,
  register: UseFormRegister<Partial<Inputs>>
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
            {...register(name as T, {
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
            {...register(name as T, {
              required: required,
              pattern: pattern,
            })}
            isInvalid={!!errors[name as T]}
            errorMessage={errors[name as T] ? errorMessage : ''}
            description={description}
            autoComplete={autoComplete}
            {...rest}
          />
        )}
      </div>
    )
  )
}
