import type { UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import type { MutableRefObject } from "react";
import { type TResponse } from "@/modules/uploadFiles/components/SingleUpload/util/singleUploadHandler";

const singleImageDeleteHandler = (
  file: File | undefined | string,
  // edgestore: BucketFunctions<EdgeStoreRouter>,
  setMainImage: UseFormSetValue<Partial<FieldValues>> | undefined,
  imageUrl: string | undefined,
  imageSrc: MutableRefObject<TResponse | undefined>
): void => {
  if (file && typeof imageUrl === "string") {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    // try {
    //   await edgestore.publicFiles.delete({
    //     url: imageUrl,
    //   });
    //
    //   imageSrc.current = undefined;
    // } catch (e) {
    //   if (e instanceof Error) {
    //     throw new Error(e.message);
    //   }
    //
    //   throw new Error("Error deleting file");
    // }
    imageSrc.current = undefined;
    if (setMainImage) {
      setMainImage("mainImage", undefined);
      setMainImage("thumbnailUrl", undefined);
    }
  }
};

export default singleImageDeleteHandler;
