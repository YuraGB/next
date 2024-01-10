// app/components/ThemeSwitcher.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import MoonIcon from './assets/moon.svg'
import SunIcon from './assets/sun.svg'
import { Button } from '@nextui-org/button'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div>
        <Button
          isIconOnly={true}
          variant={'shadow'}
          className={'bg-neutral-700'}
        >
          <Image
            src={SunIcon}
            alt={'Switch to the light theme mode'}
            loading={'lazy'}
            width={40}
            height={40}
          />
        </Button>
      </div>
    )
  }
  const isLight = theme === 'light'

  return (
    <div className={'mr-2'}>
      <Button
        onClick={() => setTheme(isLight ? 'dark' : 'light')}
        isIconOnly={true}
        variant={'shadow'}
      >
        {isLight ? (
          <Image
            src={MoonIcon}
            alt={'Switch to the light theme mode'}
            loading={'lazy'}
            width={40}
            height={40}
          />
        ) : (
          <Image
            src={SunIcon}
            alt={'Switch to the light theme mode'}
            loading={'lazy'}
            width={40}
            height={40}
          />
        )}
      </Button>
    </div>
  )
}
