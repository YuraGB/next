import { PhotoUrl } from '@/modules/homePageSlider/types'
import { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  photo: PhotoUrl
}

const PhotoItem = ({ photo }: Props): ReactNode | null => {
  if (!photo) {
    return null
  }
  return (
    <div style={{ position: 'relative', width: 'auto', height: 'auto' }}>
      <Image
        src={photo}
        alt={'Yuhur photo'}
        width={200}
        height={200}
        className="h-auto w-auto"
        priority={true}
      />
    </div>
  )
}

export default PhotoItem
