'server-only'

import { createIntl } from '@formatjs/intl'

export default async function getIntl(locale: string = 'en') {
  return createIntl({
    locale: locale,
    messages: (await import(`@/i18n/${locale}.json`)).default,
  })
}
