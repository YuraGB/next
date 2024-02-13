import { type ReactNode } from "react";
import MultiImageDropzone from "@/modules/uploadFiles/components/MultipleUpload/MultipleLoad";
import type { UseFormSetValue } from "react-hook-form/dist/types/form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import type { FieldError } from "react-hook-form/dist/types/errors";
import type { Image } from ".prisma/client";
import { useHelper } from "@/modules/uploadFiles/components/MultipleUpload/useHelper";
import * as React from "react";

export type TProps = {
  setImage: UseFormSetValue<Partial<FieldValues>> | undefined;
  error: FieldError | undefined;
  defaultValue?: Image[];
};

export const MultiImageDropzoneUsage = (props: TProps): ReactNode => {
  const { fileStates, setFileStates, onFileLoader, uploadFiles } = useHelper(props);
  return (
    <div>
      <MultiImageDropzone
        value={fileStates}
        dropzoneOptions={{
          maxFiles: 6,
        }}
        onChange={(files) => {
          setFileStates(files);
          props.setImage?.("images", uploadFiles.current);
        }}
        onFilesAdded={onFileLoader}
        uploadFiles={uploadFiles}
      />
    </div>
  );
};
