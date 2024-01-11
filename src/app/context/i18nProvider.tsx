'use client'

import { IntlProvider } from 'react-intl'
import { ReactNode } from 'react'
import { MessageFormatElement } from '@formatjs/icu-messageformat-parser'

export default async function ServerIntlProvider({
  children,
  messages,
  locale = 'en',
}: {
  children: ReactNode
  messages:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>
    | undefined
  locale: string
}) {
  return (
    <IntlProvider messages={messages} locale={locale!}>
      {children}
    </IntlProvider>
  )
}
