<<<<<<< Updated upstream
import fields from './fields'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Fields } from '@/modules/types/formTypes'
import React, { useEffect, useMemo } from 'react'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import { Tale } from '.prisma/client'
import { formatTaleData } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/util/formatData'
import addNewTale from '@/actions/addNewTale'
import useUpdateTaleHandler from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/util/updateTaleHandler'

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
  let fieldsWithDefaultValues: Fields[] = []
  const update = useUpdateTaleHandler()

  useEffect(() => {
    // clear the form
    reset({})
  }, [initialValues])

  const formFields: React.ReactNode[] = useMemo(() => {
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
  }, [errors, fieldsWithDefaultValues, initialFields, initialValues, register])

  const onSubmit: SubmitHandler<Partial<Tale>> = async (data) => {
    const normalizeData = formatTaleData(data)
    if (initialValues) {
      update.mutate({ id: initialValues.id, data: normalizeData })
    } else {
      await addNewTale(normalizeData)
    }
    // clear data after submit
    reset()
    onClose()
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
=======
import fields from './fields'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Fields } from '@/modules/types/formTypes'
import React from 'react'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import { Tale } from '.prisma/client'
import { formatTaleData } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/util/formatData'
import addNewTale from '@/actions/addNewTale'
import useUpdateTaleHandler from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/util/updateTaleHandler'

export const useTaleModal = (
  initialValues: Tale | null,
  onClose: () => void = () => {}
) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Tale>>()
  const initialFields: Fields[] = fields
  let fieldsWithDefaultValues: Fields[] = []
  const update = useUpdateTaleHandler()

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
    const normalizeData = formatTaleData(data)

    if (initialValues) {
      update.mutate({ id: initialValues.id, data: normalizeData })
    } else {
      await addNewTale(normalizeData)
    }

    onClose()
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
>>>>>>> Stashed changes
