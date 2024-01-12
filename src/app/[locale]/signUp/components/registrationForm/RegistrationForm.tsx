'use client'
import React from 'react'
import { Button } from '@nextui-org/button'
import { useSignUp } from '@/app/[locale]/signUp/components/registrationForm/useSignUp'
import { FormattedMessage } from 'react-intl'

export const RegistrationForm = (): React.ReactNode => {
  const { onSubmit, formFields, handleSubmit } = useSignUp()
  return (
    <form
      className={'bg-white p-4 mt-3 w-full max-w-xl flex flex-wrap'}
      aria-label={'registration form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      {formFields}
      <Button
        variant={'flat'}
        color={'primary'}
        fullWidth={true}
        className={'mb-4'}
        type={'submit'}
      >
        <FormattedMessage id={'sign_up_button'} />
      </Button>
    </form>
  )
}
