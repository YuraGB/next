import Image from 'next/image'
import { memo } from 'react'
import logo from '@/assets/logo.webp'

const Logo = () => {
  return (
    <section className="flex justify-center relative max-h-[300px]">
      <Image
        src={logo}
        alt="Picture of the author"
        width={0}
        height={0}
        className="object-contain w-auto h-auto"
        loading={'eager'}
        fetchPriority={'high'}
        priority={true}
      />
    </section>
  )
}

export default memo(Logo)
