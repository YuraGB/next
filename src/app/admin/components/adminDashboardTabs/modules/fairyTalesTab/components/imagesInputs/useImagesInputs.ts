import { useCallback, useEffect, useState } from 'react'

const defaultState = {
  defaultValue: '',
  id: 'defaultValue',
}

export const useImagesInputs = (initialImages: string[] | undefined) => {
  const [images, setImages] = useState<(typeof defaultState)[]>([])

  useEffect(() => {
    if (initialImages && initialImages.length) {
      const setInitials = initialImages.map((image) => ({
        id: image,
        defaultValue: image,
      }))

      setImages(setInitials)
    } else {
      setImages([defaultState])
    }
  }, [initialImages])

  const onDelete = useCallback(
    (id: string) => {
      if (id) {
        const updatedImages = images.filter((images) => images.id !== id)
        setImages(updatedImages)
      }
    },
    [images]
  )

  const onAdd: () => void = () => {
    const newInput = [...images, defaultState]
    setImages(newInput)
  }
  return {
    onAdd,
    images,
    onDelete,
  }
}
