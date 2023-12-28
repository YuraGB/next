import { useEffect, useState } from 'react'
import { getPhotos } from '@/modules/homePageSlider/api/getPhotos'
import { Slide, Slider } from '@/modules/homePageSlider/types'

export const useHPSlider = () => {
  const [photos, setPhotos] = useState<Slide[]>([])
  useEffect(() => {
    getPhotos().then((slider: Slider | null | undefined) => {
      if (slider && slider.slide?.length) {
        setPhotos(slider.slide)
      }
    })
  }, [])

  return { photos }
}
