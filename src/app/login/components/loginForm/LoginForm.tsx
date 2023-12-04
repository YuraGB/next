'use client'
import React, { memo } from 'react'
import { Button } from '@nextui-org/button'
import { useLoginForm } from '@/app/login/components/loginForm/useLoginForm'

export type LoginFormType = {
  redirectUrl: string
}

const LoginForm = ({ redirectUrl }: LoginFormType): React.ReactNode => {
  const { formFields, onSubmit, handleSubmit } = useLoginForm({ redirectUrl })
  return (
    <article className={'flex flex-col justify-center mt-3'}>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
        aria-label={'Login in form'}
      >
        {formFields}
        <div className="flex items-center justify-between flex-wrap">
          <Button
            variant={'flat'}
            type={'submit'}
            color={'primary'}
            fullWidth={true}
            className={'mb-4'}
            role={'button'}
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

export default memo(LoginForm)
