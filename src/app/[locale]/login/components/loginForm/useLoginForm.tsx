'use client'
import fields from '@/app/[locale]/login/components/loginForm/fields'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '@/modules/types/formTypes'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import { LoginFormType } from '@/app/[locale]/login/components/loginForm/LoginForm'
import toast from 'react-hot-toast'
import signInService from '@/app/[locale]/login/components/loginForm/service/signInService'
import { useRouter } from 'next/navigation'

export const useLoginForm = ({ redirectUrl }: LoginFormType) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>()
  const router = useRouter()

  const onSubmit: SubmitHandler<Partial<Inputs>> = async (
    data
  ): Promise<void> => {
    if (data) {
      try {
        const resp = await signInService(data)
        if (resp?.ok) {
          router.push(redirectUrl ? redirectUrl : '/')
        }

        if (resp?.error) {
          toast.error('There is no such user')
        }
      } catch (e) {
        if (e instanceof Error) {
          toast.error(e.message)
        } else {
          toast.error('Something went wrong')
        }
      }
    } else {
      toast.error('The login in fields are empty ')
    }
  }

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
