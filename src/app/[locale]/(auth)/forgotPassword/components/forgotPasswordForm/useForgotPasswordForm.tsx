import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '@/modules/types/formTypes'
import fields from '@/app/[locale]/forgotPassword/components/forgotPasswordForm/fields'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'

export const useForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>()

  //todo
  const onSubmit: SubmitHandler<Partial<Inputs>> = (data) => console.log(data)

  const formFields: React.ReactNode[] = formFieldsMapping(
    fields,
    errors,
    register
  )

  return {
    formFields,
    handleSubmit,
    onSubmit,
    isValid,
  }
}
