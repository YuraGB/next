import { PhotoList } from '@/modules/homePageSlider/types'
import { ReactNode } from 'react'
import PhotoItem from '@/modules/homePageSlider/components/PhotoItem/PhotoItem'
type Props = {
  photos: PhotoList
}

const photoList = ({ photos }: Props): ReactNode[] | null => {
  if (!photos?.length) {
    return null
  }
  return photos.map((photo) => <PhotoItem key={photo} photo={photo} />)
}

export default photoList
