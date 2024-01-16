'use client'
import { memo } from 'react'
import { FormattedMessage } from 'react-intl'

const PageTitle = () => {
  return (
    <h1>
      <FormattedMessage id={'catalog.page'} />
    </h1>
  )
}

export default memo(PageTitle)
