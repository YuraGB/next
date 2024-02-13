import { type BucketFunctions } from "@edgestore/react/src/createNextProxy";
import { type EdgeStoreRouter } from "@/app/api/edgestore/[...edgestore]/route";
import type { UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import { type MutableRefObject } from "react";
export type TResponse = {
  url: string;
  thumbnailUrl: string | null;
  size: number;
  uploadedAt: Date;
  metadata: Record<string, never>;
  path: Record<string, never>;
  pathOrder: string[];
};

export const singleUploadHandler = async (
  file: File | undefined,
  edgestore: BucketFunctions<EdgeStoreRouter>,
  setMainImage: UseFormSetValue<Partial<FieldValues>> | undefined,
  imageSrc: MutableRefObject<TResponse | undefined>
): Promise<void> => {
  if (file) {
    let res;

    try {
      res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress): void => {
          // you can use this to show a progress bar
          console.log(progress);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }

      throw new Error("Error uploading file");
    }

    // set the main image to the react-hook-form register
    if (res) {
      imageSrc.current = res;

      if (setMainImage) {
        setMainImage("mainImage", res.url);
        setMainImage("thumbnailUrl", res.thumbnailUrl);
      }
    }
    // you can run some server action or api here
    // to add the necessary data to your database
    console.log(res);
  }
};

export default singleUploadHandler;
