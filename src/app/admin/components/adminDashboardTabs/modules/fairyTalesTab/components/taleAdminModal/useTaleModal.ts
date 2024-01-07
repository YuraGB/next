import fields from './fields'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Fields, Inputs } from '@/modules/types/formTypes'
import React from 'react'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import validateFields from '@/utils/validation/validateFields'
import { Tale } from '.prisma/client'
import { updateTale } from '@/services/updateTale'
import { formatTaleData } from '@/app/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/util/formatData'

export const useTaleModal = (initialValues: Tale | null) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>()
  const initialFields: Fields[] = fields
  let fieldsWithDefaultValues: Fields[] = []

  if (initialValues) {
    fieldsWithDefaultValues = fields.map((field: Fields) => {
      if (
        initialValues &&
        field.name &&
        initialValues[field.name as keyof Tale] !== undefined
      ) {
        return {
          defaultValue: initialValues[field.name as keyof Tale] as string,
          ...field,
        }
      }
      return field
    })
  }

  const formFields: React.ReactNode[] = formFieldsMapping(
    initialValues ? fieldsWithDefaultValues : initialFields,
    errors,
    register
  )

  const onSubmit: SubmitHandler<Partial<Tale>> = async (data) => {
    if (initialValues) {
      const normalizeData = formatTaleData(data)
      const updatedTale = await updateTale(initialValues.id, normalizeData)
      console.log(updatedTale)
    }
  }

  return {
    formFields,
    handleSubmit,
    isValid,
    onSubmit,
    errors,
    register,
  }
}