import fields from '@/modules/loginForm/fields'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '@/modules/types/formTypes'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import { signIn } from 'next-auth/react'
import { LoginFormType } from '@/modules/loginForm/LoginForm'

export const useLoginForm = ({ redirectUrl }: LoginFormType) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>()

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

        // todo error hendlers
        console.log(resp)
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
