'use client'
import React from 'react'
import { Button } from '@nextui-org/button'
import { useForgotPasswordForm } from '@/modules/forgotPasswordForm/useForgotPasswordForm'

export const ForgotPasswordForm = (): React.ReactNode => {
  const { formFields, onSubmit, handleSubmit } = useForgotPasswordForm()
  return (
    <article className={'flex flex-col justify-center mt-3'}>
      <form
        aria-label={'Forgot password form'}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">{formFields}</div>
        <div className="flex items-center justify-between flex-wrap">
          <Button
            variant={'flat'}
            color={'primary'}
            fullWidth={true}
            className={'mb-4'}
            type={'submit'}
          >
            Send me recovery letter
          </Button>
        </div>
      </form>
    </article>
  )
}
