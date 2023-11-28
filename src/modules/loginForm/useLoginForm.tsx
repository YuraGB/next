import fields from '@/modules/loginForm/fields'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '@/modules/types/formTypes'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>()

  //todo
  const onSubmit: SubmitHandler<Partial<Inputs>> = (data): void =>
    console.log(data)

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
