import { useEffect, useState } from 'react'
import { getPhotos } from '@/modules/homePageSlider/api/getPhotos'

export const useHPSlider = () => {
  const [photos, setPhotos] = useState<string[]>([])
  useEffect(() => {
    getPhotos('/images').then((images: string[]) => setPhotos(images))
  }, [])

  return { photos }
}
