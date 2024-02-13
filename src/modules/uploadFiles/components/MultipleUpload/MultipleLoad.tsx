"use client";
import * as React from "react";
import { type DropzoneOptions } from "react-dropzone";
import { useMultipleLoad } from "@/modules/uploadFiles/components/MultipleUpload/useMultipleLoad";
import { type MutableRefObject } from "react";
import { type TUploadFiles } from "@/modules/uploadFiles/components/MultipleUpload/useHelper";
import InputMultipleUpload from "@/modules/uploadFiles/components/InputMultipleUpload/InputMultipleUpload";
import MultipleImagesContainer from "@/modules/uploadFiles/components/MultipleImagesContainer/MultipleImagesContainer";

export type FileState = {
  file: File | string;
  key: string; // used to identify the file in the progress callback
  progress: "PENDING" | "COMPLETE" | "ERROR" | number;
};

export type InputProps = {
  className?: string;
  value?: FileState[];
  onChange?: (files: FileState[]) => void | Promise<void>;
  onFilesAdded?: (addedFiles: FileState[]) => void | Promise<void>;
  disabled?: boolean;
  dropzoneOptions?: Omit<DropzoneOptions, "disabled">;
  uploadFiles?: MutableRefObject<TUploadFiles>;
};

const MultiImageDropzone = React.forwardRef<HTMLInputElement, InputProps>((props) => {
  const { value, disabled, onChange, uploadFiles, dropzoneOptions } = props;
  const { getRootProps, getInputProps, imageUrls, errorMessage, dropZoneClassName } =
    useMultipleLoad(props);

  return (
    <div>
      <div className="grid grid-cols-[repeat(1,1fr)] gap-2 sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
        {/* Images */}
        <MultipleImagesContainer
          value={value}
          imageUrls={imageUrls}
          disabled={disabled}
          onChange={onChange}
          uploadFiles={uploadFiles}
        />
        {/* Dropzone */}
        <InputMultipleUpload
          value={value}
          dropzoneOptions={dropzoneOptions}
          dropZoneClassName={dropZoneClassName}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          disabled={disabled}
        />
      </div>
      {/* Error Text */}
      <div className="mt-1 text-xs text-red-500">{errorMessage}</div>
    </div>
  );
});
MultiImageDropzone.displayName = "MultiImageDropzone";

export default MultiImageDropzone;
