'use client'
import { FormattedMessage } from 'react-intl'

const Title = () => {
  return (
    <h1 className={'text-[24px] items-center text-center mb-3'}>
      <FormattedMessage
        id={'contactUs.title'}
        defaultMessage={'You can leave the message to us'}
      />
    </h1>
  )
}

export default Title
