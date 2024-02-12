"use client";
/* eslint-disable */
import * as React from "react";
import { type DropzoneOptions } from "react-dropzone";
import { useUploadSingle } from "@/modules/uploadFiles/components/SingleUpload/useUploadSingle";
import ImageUpload from "@/modules/uploadFiles/components/InputUpload/InputUpload";
import { RemoveImageIcon } from "@/modules/uploadFiles/components/RemoveImageIcon/RemoveImageIcon";

export type InputProps = {
  width: number;
  height: number;
  className?: string;
  value?: File | string;
  onChange?: (file?: File, imageUrl?: string) => void | Promise<void>;
  disabled?: boolean;
  dropzoneOptions?: Omit<DropzoneOptions, "disabled">;
};

const SingleImageDropzone = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { disabled, onChange } = props;

  const {
    getRootProps,
    errorMessage,
    getInputProps,
    acceptedFiles,
    imageUrl,
    dropZoneClassName,
    width,
    height,
  } = useUploadSingle(props);
  return (
    <div>
      <div
        {...getRootProps({
          className: dropZoneClassName,
          style: {
            width,
            height,
          },
        })}
      >
        {/* Main File Input */}
        <input ref={ref} {...getInputProps()} />
        <ImageUpload imageUrl={imageUrl} acceptedFiles={acceptedFiles} disabled={disabled} />
        {/* Remove Image Icon */}
        <RemoveImageIcon imageUrl={imageUrl} disabled={disabled} onChange={onChange} />
      </div>
      {/* Error Text */}
      <div className="mt-1 text-xs text-red-500">{errorMessage}</div>
    </div>
  );
});
SingleImageDropzone.displayName = "SingleImageDropzone";

export { SingleImageDropzone };
