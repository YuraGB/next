import Image from 'next/image'
import { memo } from 'react'
import logo from '@/assets/logo.webp'

const Logo = () => {
  return (
    <section className="flex justify-center relative max-h-[300px]">
      <Image
        src={logo}
        alt="Picture of the author"
        width={500}
        height={300}
        className="object-contain w-auto h-auto"
        loading={'eager'}
      />
    </section>
  )
}

export default memo(Logo)
