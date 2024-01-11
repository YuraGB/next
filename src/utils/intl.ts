'server-only'

import { createIntl } from '@formatjs/intl'

export default async function getIntl(locale: string = 'en') {
  const messages = (await import(`@/i18n/${locale}.json`)).default
  return createIntl({
    locale,
    messages,
    onError: (e) => console.log(e),
  })
}
