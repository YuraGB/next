import { type BucketFunctions } from "@edgestore/react/src/createNextProxy";
import { type EdgeStoreRouter } from "@/app/api/edgestore/[...edgestore]/route";
import type { UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";

const singleImageDeleteHandler = async (
  file: File | undefined,
  edgestore: BucketFunctions<EdgeStoreRouter>,
  setMainImage: UseFormSetValue<Partial<FieldValues>> | undefined,
  imageUrl: string | undefined
): Promise<void> => {
  if (file && typeof imageUrl === "string") {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    await edgestore.publicFiles.delete({
      url: imageUrl,
    });

    if (setMainImage) {
      setMainImage("mainImage", undefined);
    }
  }
};

export default singleImageDeleteHandler;
