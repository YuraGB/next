'use client'
import fields from '@/app/login/components/loginForm/fields'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '@/modules/types/formTypes'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import { signIn } from 'next-auth/react'
import { LoginFormType } from '@/app/login/components/loginForm/LoginForm'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

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
      const { name, password } = data
      if (name && password) {
        const resp = await signIn('credentials', {
          username: name,
          password: password,
          redirect: false,
          callbackUrl: redirectUrl,
        })

        if (resp?.ok) {
          await router.push(redirectUrl ? redirectUrl : '/')
        }

        if (resp?.error) {
          toast.error('There are no such user')
        }
      }
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
