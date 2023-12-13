'use client'
import React, { memo, ReactNode } from 'react'
import { useHPSlider } from '@/modules/homePageSlider/useHPSlider'
import Carousel from '@/components/carousel'
import PhotoItem from '@/modules/homePageSlider/components/PhotoItem/PhotoItem'

const HomePageSlider = (): ReactNode => {
  const { photos } = useHPSlider()

  return (
    <section className={'w-full'}>
      <Carousel>
        {photos.map((photo) => (
          <PhotoItem key={photo} photo={photo} />
        ))}
      </Carousel>
    </section>
  )
}

export default memo(HomePageSlider)
