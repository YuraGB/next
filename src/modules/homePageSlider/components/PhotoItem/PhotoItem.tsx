import { Slide } from '@/modules/homePageSlider/types'
import { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  photo: Slide
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const PhotoItem = ({ photo }: Props): ReactNode | null => {
  if (!photo) {
    return null
  }
  return (
    <div style={{ position: 'relative', width: 'auto', height: 'auto' }}>
      <Image
        src={photo.image}
        fetchPriority={'high'}
        alt={'Yuhur photo'}
        width={200}
        height={200}
        loading={'eager'}
        className="h-auto w-auto [clip-path:ellipse(229px_245px_at_10%_20%)]"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        placeholder="blur" // Optional blur-up while loading
      />
    </div>
  )
}

export default PhotoItem
