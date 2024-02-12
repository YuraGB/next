"use client";
import React, { forwardRef } from "react";
import { SingleImageDropzone } from "@/modules/uploadFiles/components/SingleUpload/SingleImageDropzoneUsage";
import { Button } from "@nextui-org/button";
import type { UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import { FormattedMessage } from "react-intl";
import type { FieldError } from "react-hook-form/dist/types/errors";
import { useSingleUpload } from "@/modules/uploadFiles/components/SingleUpload/useSingleUpload";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

type TProps = {
  setMainImage: UseFormSetValue<Partial<FieldValues>> | undefined;
  error: FieldError | undefined;
};

// eslint-disable-next-line react/display-name
export const SingleImageDropzoneUsage = forwardRef<HTMLInputElement, TProps>(
  ({ setMainImage, error }, ref) => {
    const { onUpload, imageSrc, setFile, file, onDelete } = useSingleUpload(setMainImage);

    return (
      <div
        className={`flex flex-col items-center justify-center border-1 border-gray-300 p-4 ${
          error ? " border-red-700 " : ""
        }`}
      >
        <ErrorMessage error={error?.message} />
        <SingleImageDropzone
          width={200}
          height={200}
          value={file}
          onChange={async (fileOnChange: File | undefined): Promise<void> => {
            setFile(fileOnChange);
            await onDelete(imageSrc.current);
          }}
        />
        <Button type={"button"} variant={"solid"} color={"primary"} size={"lg"} onClick={onUpload}>
          <FormattedMessage id={"upload.image"} defaultMessage={"Upload"} />
        </Button>
        <input ref={ref} className={"hidden"} hidden={true} />
      </div>
    );
  }
);

export default SingleImageDropzoneUsage;
