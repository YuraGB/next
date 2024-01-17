import { usePathname, useRouter } from 'next/navigation'
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig from '../../../i18nConfig'
import { ChangeEvent } from 'react'

export const useLangSwitcher = () => {
  const router = useRouter()
  const currentPathname = usePathname()
  const currentLocale = useCurrentLocale(i18nConfig)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value

    // set cookie for next-i18n-router
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = '; expires=' + date.toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  return { handleChange, currentLocale }
}
