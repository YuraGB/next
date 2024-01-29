import fields from './fields'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Fields } from '@/modules/types/formTypes'
import React, { useEffect, useMemo } from 'react'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import { Tale } from '.prisma/client'
import { formatTaleData } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/util/formatData'
import useUpdateTaleHandler from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/service/updateTaleHandler'
import { useAddNewTale } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/service/useAddNewTale'

export const useTaleModal = (
  initialValues: Tale | null,
  onClose: () => void = () => {}
) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Tale>>()
  const initialFields: Fields[] = fields

  const { onUpdateTale, data: updatedTale } = useUpdateTaleHandler()
  const { onAddTale, data: newTale } = useAddNewTale()

  useEffect(() => {
    if (newTale || updatedTale) {
      // clear data after submit and close popUp
      reset()
      onClose()
    }
  }, [newTale, onClose, reset, updatedTale])

  useEffect(() => {
    // clear the form
    reset({})
  }, [initialValues, reset])

  const formFields: React.ReactNode[] = useMemo(() => {
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

    return formFieldsMapping(
      initialValues ? fieldsWithDefaultValues : initialFields,
      errors,
      register
    )
  }, [errors, initialFields, initialValues, register])

  const onSubmit: SubmitHandler<Partial<Tale>> = async (data) => {
    const normalizeData = formatTaleData(data)
    if (initialValues) {
      onUpdateTale({ id: initialValues.id, data: normalizeData })
    } else {
      onAddTale(normalizeData)
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
