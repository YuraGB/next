import React from 'react'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'

export const RegistrationForm = (): React.ReactNode => {
  return (
    <form className={'bg-white p-4 mt-3'} aria-label={'registration form'}>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative mb-6">
          <Input type="firstName" label="First Name" />
        </div>

        <div className="relative mb-6">
          <Input type="lastName" label="Last Name" />
        </div>
      </div>

      <div className="relative mb-6">
        <Input type="email" label="Email" />
      </div>

      <div className="relative mb-6">
        <Input type="password" label="password" autoComplete={'on'} />
      </div>

      <Button
        variant={'flat'}
        color={'primary'}
        fullWidth={true}
        className={'mb-4'}
      >
        Sign up
      </Button>
    </form>
  )
}
