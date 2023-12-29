'use client'
import React, { memo, ReactNode } from 'react'
import { useHPSlider } from '@/modules/homePageSlider/useHPSlider'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('@/components/carousel'))
const PhotoItem = dynamic(
  () => import('@/modules/homePageSlider/components/PhotoItem/PhotoItem')
)

const HomePageSlider = (): ReactNode => {
  const { photos } = useHPSlider()

  return (
    <section className={'w-full'}>
      <Carousel>
        {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </Carousel>
    </section>
  )
}

export default memo(HomePageSlider)
