'use client'
import { memo } from 'react'
import { FormattedMessage } from 'react-intl'

const PageTitle = () => {
  return (
    <h1 className={'mb-4 text-[24px]'}>
      <FormattedMessage id={'catalog.page'} />
    </h1>
  )
}

export default memo(PageTitle)
