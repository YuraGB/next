// Code: ContuctUsForm
'use client'
import { Button } from '@nextui-org/button'
import React from 'react'
import { useContuctUs } from '@/app/[locale]/contacts/_components/ContactUsForm/useContuctUs'
import { FormattedMessage } from 'react-intl'

const ContactUsForm = () => {
  const { formFields, onSubmit, handleSubmit } = useContuctUs()

  return (
    <section>
      <form
        aria-label={'Forgot password form'}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formFields}
        <div className="flex items-center justify-between flex-wrap">
          <Button
            variant={'flat'}
            color={'primary'}
            fullWidth={true}
            className={'mb-4'}
            type={'submit'}
          >
            <FormattedMessage
              id={'contactUs.send'}
              defaultMessage={'Send up the message'}
            />
          </Button>
        </div>
      </form>
    </section>
  )
}

export default ContactUsForm
