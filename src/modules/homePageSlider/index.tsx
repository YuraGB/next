'use client'
import React, { memo, ReactNode } from 'react'
import { useHPSlider } from '@/modules/homePageSlider/useHPSlider'
import dynamic from 'next/dynamic'
import { SliderSkeleton } from '@/modules/homePageSlider/sliderSkeleton'

const Carousel = dynamic(() => import('@/components/carousel'))
const PhotoItem = dynamic(
  () => import('@/modules/homePageSlider/components/PhotoItem/PhotoItem')
)

const HomePageSlider = (): ReactNode => {
  const { photos } = useHPSlider()

  const content =
    photos && photos.length ? (
      <Carousel>
        {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </Carousel>
    ) : (
      <Carousel>
        <SliderSkeleton />
      </Carousel>
    )

  return <section className={'w-full'}>{content}</section>
}

export default memo(HomePageSlider)
