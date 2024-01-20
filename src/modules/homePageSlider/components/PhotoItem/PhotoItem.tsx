'use client'
import { Slide } from '@/modules/homePageSlider/types'
import React, { ReactNode, useEffect, useState } from 'react'
import ImageComponent from 'next/image'
import { SliderSkeleton } from '@/modules/homePageSlider/sliderSkeleton'

type Props = {
  photo: Slide
}

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e4e4e7" offset="20%" />
      <stop stop-color="#DDDDDEFF" offset="50%" />
      <stop stop-color="#e4e4e7" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e4e4e7" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const PhotoItem = ({ photo }: Props): ReactNode | null => {
  const [isLoaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (photo?.image) {
      const img = new Image(300, 900)
      img.src = photo.image
      img.onload = () => setLoaded(true)
    }
  }, [photo?.image])

  if (!photo) {
    return null
  }
  return (
    <div
      className={'flex items-center justify-center'}
      style={{ position: 'relative', width: 'auto', height: '300px' }}
    >
      {isLoaded ? (
        <ImageComponent
          src={photo.image}
          fetchPriority={'high'}
          alt={'Yuhur photo'}
          width={200}
          height={200}
          loading={'eager'}
          className="rounded-[50%] w-[200px]"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          placeholder="blur" // Optional blur-up while loading
        />
      ) : (
        <SliderSkeleton />
      )}
    </div>
  )
}

export default PhotoItem
