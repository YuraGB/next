/* eslint-disable */
import * as React from "react";
import { type InputProps } from "@/modules/uploadFiles/components/SingleUpload/SingleImageDropzoneUsage";
import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";
import variants from "@/modules/uploadFiles/utils/variants";
import { useErrorMeesages } from "@/modules/uploadFiles/utils/useErrorMeesages";

export const useUploadSingle = ({
  dropzoneOptions,
  width,
  height,
  value,
  className,
  disabled,
  onChange,
}: InputProps) => {
  const imageUrl: string | null = React.useMemo(() => {
    if (typeof value === "string") {
      // in case a url is passed in, use it to display the image
      return value;
    } else if (value) {
      // in case a file is passed in, create a base64 url to display the image
      return URL.createObjectURL(value);
    }
    return null;
  }, [value]);
  // dropzone configuration
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    disabled,
    // eslint-disable-next-line no-shadow
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        void onChange?.(file);
      }
    },
    ...dropzoneOptions,
  });
  const errorMessage = useErrorMeesages(fileRejections, dropzoneOptions);
  // styling

  const dropZoneClassName = React.useMemo(
    () =>
      (
        twMerge(
          variants.base,
          isFocused && variants.active,
          disabled && variants.disabled,
          imageUrl && variants.image,
          (isDragReject ?? fileRejections[0]) && variants.reject,
          isDragAccept && variants.accept,
          className
        ) as string
      ).trim(),
    [isFocused, imageUrl, fileRejections, isDragAccept, isDragReject, disabled, className]
  );

  return {
    getRootProps,
    getInputProps,
    acceptedFiles,
    imageUrl,
    dropZoneClassName,
    width,
    height,
    errorMessage,
  };
};
