'use client'
import React from 'react'
import { Button } from '@nextui-org/button'
import { useLoginForm } from '@/modules/loginForm/useLoginForm'

export const LoginForm = (): React.ReactNode => {
  const { formFields, onSubmit, handleSubmit } = useLoginForm()
  return (
    <article className={'flex flex-col justify-center mt-3'}>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formFields}
        <div className="flex items-center justify-between flex-wrap">
          <Button
            variant={'flat'}
            type={'submit'}
            color={'primary'}
            fullWidth={true}
            className={'mb-4'}
          >
            Login in
          </Button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/forgotPassword"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </article>
  )
}
