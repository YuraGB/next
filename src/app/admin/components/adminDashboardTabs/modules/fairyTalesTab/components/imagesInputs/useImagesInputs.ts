import { useEffect, useState } from 'react'

const defaultState = {
  defaultValue: '',
}

export const useImagesInputs = (initialImages: string[] | undefined) => {
  const [images, setImages] = useState<(typeof defaultState)[]>([])

  useEffect(() => {
    if (initialImages && initialImages.length) {
      const setInitials = initialImages
        .map((image) => ({
          defaultValue: image,
        }))
        .filter((i) => i.defaultValue)

      setImages(setInitials)
    } else {
      setImages([defaultState])
    }
  }, [initialImages])

  const onAdd: () => void = () => {
    const newInput = [...images, defaultState]
    setImages(newInput)
  }
  return {
    onAdd,
    images,
  }
}
