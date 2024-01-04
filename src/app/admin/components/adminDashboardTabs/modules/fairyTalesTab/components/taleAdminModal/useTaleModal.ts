import fields from './fields'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '@/modules/types/formTypes'
import React from 'react'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import validateFields from '@/utils/validation/validateFields'
export const useTaleModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>()

  const formFields: React.ReactNode[] = formFieldsMapping(
    fields,
    errors,
    register
  )

  const onSubmit: SubmitHandler<Partial<Inputs>> = async (data) => {
    const areAllFieldsFilled = validateFields(data)

    if (areAllFieldsFilled) {
    }
  }
  return {
    formFields,
    handleSubmit,
    isValid,
    onSubmit,
  }
}
