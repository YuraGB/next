import { useCallback, useEffect, useState } from "react";

const defaultState = {
  defaultValue: "",
  id: "defaultValue",
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useImagesInputs = (initialImages: string[] | undefined) => {
  const [images, setImages] = useState<Array<typeof defaultState>>([]);

  useEffect(() => {
    if (initialImages?.length) {
      const setInitials = initialImages
        .filter((image) => image)
        .map((image) => ({
          id: image,
          defaultValue: image,
        }));

      setImages(setInitials);
    } else {
      setImages([defaultState]);
    }
  }, [initialImages]);

  const onDelete = useCallback(
    (id: string) => {
      if (id) {
        // eslint-disable-next-line no-shadow
        const updatedImages = images.filter((images) => images.id !== id);
        setImages(updatedImages);
      }
    },
    [images]
  );

  const onAdd: () => void = () => {
    const newInput = [...images, defaultState];
    setImages(newInput);
  };
  return {
    onAdd,
    images,
    onDelete,
  };
};
