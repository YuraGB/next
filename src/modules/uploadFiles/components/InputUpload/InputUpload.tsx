import { type FC, Fragment } from "react";
import { UploadCloudIcon } from "lucide-react";
import Button from "@/modules/uploadFiles/utils/Button";
import * as React from "react";
type Props = {
  imageUrl: string | null;
  acceptedFiles: File[];
  disabled: boolean | undefined;
};

const ImageUpload: FC<Props> = ({ imageUrl, acceptedFiles, disabled }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <Fragment>
      {imageUrl ? (
        // Image Preview
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="size-full rounded-md object-cover"
          src={imageUrl}
          alt={acceptedFiles[0]?.name}
        />
      ) : (
        // Upload Icon
        <div className="flex flex-col items-center justify-center text-xs text-gray-400">
          <UploadCloudIcon className="mb-2 size-7" />
          <div className="text-gray-400">drag & drop to upload</div>
          <div className="mt-3">
            <Button type={"button"} disabled={disabled}>
              select
            </Button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ImageUpload;
