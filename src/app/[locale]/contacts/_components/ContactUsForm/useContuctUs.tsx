import { useForm } from 'react-hook-form'
import { IContactUs } from '@/server/actions/addContactUsMessage'
import React from 'react'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import fields from '@/app/[locale]/contacts/_components/ContactUsForm/fields'

export const useContuctUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<IContactUs>>()

  const formFields: React.ReactNode[] = formFieldsMapping(
    fields,
    errors,
    register
  )

  const onSubmit = (data: Partial<IContactUs>) => {
    console.log(data)
  }

  return {
    formFields,
    onSubmit,
    handleSubmit,
    isValid,
  }
}
