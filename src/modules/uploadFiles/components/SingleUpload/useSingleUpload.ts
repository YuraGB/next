import { type MutableRefObject, useEffect, useRef, useState } from "react";
import { useEdgeStore } from "@/context/Edgestore";
import singleUploadHandler, {
  type TResponse,
} from "@/modules/uploadFiles/components/SingleUpload/util/singleUploadHandler";
import singleImageDeleteHandler from "@/modules/uploadFiles/components/SingleUpload/util/singleImageDeleteHandler";
import type { UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import { type Image } from ".prisma/client";

type TUseSingleUpload = {
  onUpload: () => Promise<void>;
  onDelete: (image: string | undefined) => Promise<void>;
  file: File | undefined | string;
  setFile: (file: File | undefined) => void;
  imageSrc: MutableRefObject<TResponse | undefined>;
};

export const useSingleUpload = (
  setMainImage: UseFormSetValue<Partial<FieldValues>> | undefined,
  defaultValue: Image | undefined
): TUseSingleUpload => {
  const [file, setFile] = useState<File | string>();

  useEffect(() => {
    if (defaultValue?.url && defaultValue?.thumbnailUrl && setMainImage) {
      setMainImage("mainImage", defaultValue.url);
      setMainImage("thumbnailUrl", defaultValue.thumbnailUrl);
      setFile(defaultValue.thumbnailUrl);
    }
  }, []);

  //save the uploaded image url
  const imageSrc = useRef<TResponse | undefined>();
  const { edgestore } = useEdgeStore();

  const onUpload = async (): Promise<void> => {
    if (typeof file === "string") return;
    await singleUploadHandler(file, edgestore, setMainImage, imageSrc);
  };

  const onDelete = async (image: string | undefined): Promise<void> => {
    await singleImageDeleteHandler(file, setMainImage, image ?? defaultValue?.url, imageSrc);
  };

  return { onUpload, onDelete, file, setFile, imageSrc };
};
