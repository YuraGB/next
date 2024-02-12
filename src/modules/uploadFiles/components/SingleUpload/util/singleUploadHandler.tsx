import { type BucketFunctions } from "@edgestore/react/src/createNextProxy";
import { type EdgeStoreRouter } from "@/app/api/edgestore/[...edgestore]/route";
import type { UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import { type MutableRefObject } from "react";

export const singleUploadHandler = async (
  file: File | undefined,
  edgestore: BucketFunctions<EdgeStoreRouter>,
  setMainImage: UseFormSetValue<Partial<FieldValues>> | undefined,
  imageSrc: MutableRefObject<string | undefined>
): Promise<void> => {
  if (file) {
    const res = await edgestore.publicFiles.upload({
      file,
      onProgressChange: (progress): void => {
        // you can use this to show a progress bar
        console.log(progress);
      },
    });

    // set the main image to the react-hook-form register
    if (setMainImage) {
      imageSrc.current = res.url;
      setMainImage("mainImage", res.url);
    }
    // you can run some server action or api here
    // to add the necessary data to your database
    console.log(res);
  }
};

export default singleUploadHandler;
