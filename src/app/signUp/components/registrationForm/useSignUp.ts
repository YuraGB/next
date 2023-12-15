import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '@/modules/types/formTypes'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import fields from './fields'
import validateFields from '@/utils/validation/validateFields'
import { createUser } from '@/app/signUp/components/registrationForm/service/createUser'
import toast from 'react-hot-toast'
import signInService from '@/app/login/components/loginForm/service/signInService'
import { useRouter } from 'next/navigation'

export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>()

  const router = useRouter()

  const onSubmit: SubmitHandler<Partial<Inputs>> = async (data) => {
    const areAllFieldsFilled = validateFields(data)

    if (areAllFieldsFilled) {
      const newUser = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email ? data.email : '',
        hashPassword: data.password ? data.password : '',
      }

      const user = await createUser({
        data: newUser,
        //select -> the fields that will return after creation
        select: {
          email: true,
          hashPassword: true,
        },
      })

      if (typeof user !== 'string' && user.email && user.hashPassword) {
        const response = await signInService({
          email: user.email,
          password: user.hashPassword,
        })

        if (response?.ok) {
          router.push('/')
        }

        if (response?.error) {
          toast.error('There is no such user')
        }
      }
    }
  }

  const formFields: React.ReactNode[] = formFieldsMapping(
    fields,
    errors,
    register
  )

  return { formFields, handleSubmit, onSubmit, isValid }
}
