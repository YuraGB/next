import { memo, useMemo } from 'react'
import Image from 'next/image'
import MoonIcon from '@/components/themeSwitcher/assets/moon.svg'
import SunIcon from '@/components/themeSwitcher/assets/sun.svg'

const ImageSwitcher = ({ theme }: { theme: string | undefined }) => {
  const srcDependency = useMemo(
    () => (theme === 'light' ? MoonIcon : SunIcon),
    [theme]
  )

  return (
    <Image
      src={srcDependency}
      alt={'Switch to the light theme mode'}
      className={'w-auto h-auto'}
      priority={true}
      loading={'eager'}
      style={{
        width: 'auto',
        height: 'auto',
      }}
      width={0}
      height={0}
      sizes={'40px'}
    />
  )
}

export default memo(ImageSwitcher)
