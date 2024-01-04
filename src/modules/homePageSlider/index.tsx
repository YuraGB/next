'use client'
import React, { memo, ReactNode } from 'react'
import { useHPSlider } from '@/modules/homePageSlider/useHPSlider'
import { SliderSkeleton } from '@/modules/homePageSlider/sliderSkeleton'

import Carousel from '@/components/carousel'
import PhotoItem from '@/modules/homePageSlider/components/PhotoItem/PhotoItem'

const HomePageSlider = (): ReactNode => {
  const { photos } = useHPSlider()

  const content =
    photos && photos.length ? (
      photos.map((photo) => <PhotoItem key={photo.id} photo={photo} />)
    ) : (
      <SliderSkeleton />
    )

  return (
    <section className={'w-full'}>
      <Carousel>{content}</Carousel>
    </section>
  )
}

export default memo(HomePageSlider)
