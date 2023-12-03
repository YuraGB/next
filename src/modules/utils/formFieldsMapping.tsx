import { Fields, Inputs } from '@/modules/types/formTypes'
import { Input } from '@nextui-org/input'
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
        label,
        required,
        errorMessage,
        pattern,
        description,
        autoComplete,
      }: Fields,
      index: number
    ) => (
      <div className="mb-6" key={label + index}>
        <Input
          isRequired={required}
          type={type}
          label={label}
          {...register(label as T, {
            required: required,
            pattern: pattern,
          })}
          errorMessage={errors[label as T] ? errorMessage : ''}
          description={description}
          autoComplete={autoComplete}
        />
      </div>
    )
  )
}
