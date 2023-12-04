import { useMemo, useState } from 'react'
import { getPhotos } from '@/modules/homePageSlider/api/getPhotos'

export const useHPSlider = () => {
  const [photos, setPhotos] = useState<string[]>([])
  useMemo(async () => {
    const images: string[] = await getPhotos('/images')
    setPhotos(images)
  }, [])

  return { photos }
}
