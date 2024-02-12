import { useRef, useState } from "react";
import { useEdgeStore } from "@/context/Edgestore";
import singleUploadHandler from "@/modules/uploadFiles/components/SingleUpload/util/singleUploadHandler";
import singleImageDeleteHandler from "@/modules/uploadFiles/components/SingleUpload/util/singleImageDeleteHandler";
import type { UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";

type TUseSingleUpload = {
  onUpload: () => Promise<void>;
  onDelete: (image: string | undefined) => Promise<void>;
  file: File | undefined;
  setFile: (file: File | undefined) => void;
  imageSrc: React.MutableRefObject<string | undefined>;
};

export const useSingleUpload = (
  setMainImage: UseFormSetValue<Partial<FieldValues>> | undefined
): TUseSingleUpload => {
  const [file, setFile] = useState<File>();

  //save the uploaded image url
  const imageSrc = useRef<string | undefined>();
  const { edgestore } = useEdgeStore();
  const onUpload = async (): Promise<void> => {
    await singleUploadHandler(file, edgestore, setMainImage, imageSrc);
  };

  const onDelete = async (image: string | undefined): Promise<void> => {
    await singleImageDeleteHandler(file, edgestore, setMainImage, image);
  };

  return { onUpload, onDelete, file, setFile, imageSrc };
};
