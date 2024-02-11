import {
  type FileState,
  type InputProps,
} from "@/modules/uploadFiles/components/MultipleUpload/MultipleLoad";
import { useErrorMeesages } from "@/modules/uploadFiles/utils/useErrorMeesages";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { type DropzoneInputProps, type DropzoneRootProps, useDropzone } from "react-dropzone";
import variants from "@/modules/uploadFiles/utils/variants";
import ERROR_MESSAGES from "@/modules/uploadFiles/utils/errorMessages";

type MultipleReturn = {
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
  imageUrls: string[];
  errorMessage: string | undefined;
  dropZoneClassName: string;
};

export const useMultipleLoad = ({
  dropzoneOptions,
  value,
  className,
  disabled,
  onChange,
  onFilesAdded,
}: InputProps): MultipleReturn => {
  const [customError, setCustomError] = React.useState<string>();

  // images urls
  const imageUrls: string[] = React.useMemo(() => {
    if (value) {
      return value.map((fileState) => {
        if (typeof fileState.file === "string") {
          // in case a url is passed in, use it to display the images
          return fileState.file;
        } else {
          // in case a file is passed in, create a base64 url to display the images
          return URL.createObjectURL(fileState.file);
        }
      });
    }
    return [];
  }, [value]);

  const onDrop = (acceptedFiles: File[]): void => {
    const files = acceptedFiles;
    setCustomError(undefined);
    if (
      dropzoneOptions?.maxFiles &&
      (value?.length ?? 0) + files.length > dropzoneOptions.maxFiles
    ) {
      setCustomError(ERROR_MESSAGES.tooManyFiles(dropzoneOptions.maxFiles));
      return;
    }
    if (files) {
      const addedFiles = files.map<FileState>((file: File) => ({
        file,
        key: Math.random().toString(36).slice(2),
        progress: "PENDING",
      }));
      void onFilesAdded?.(addedFiles);
      void onChange?.([...(value ?? []), ...addedFiles]);
    }
  };

  // dropzone configuration
  const { getRootProps, getInputProps, fileRejections, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "image/*": [] },
      disabled,
      onDrop,
      ...dropzoneOptions,
    });

  const errorMessage = useErrorMeesages(fileRejections, dropzoneOptions);

  // styling
  const dropZoneClassName = React.useMemo(
    () =>
      twMerge(
        variants.base,
        isFocused && variants.active,
        disabled && variants.disabled,
        (isDragReject ?? fileRejections[0]) && variants.reject,
        isDragAccept && variants.accept,
        className
      ).trim(),
    [isFocused, fileRejections, isDragAccept, isDragReject, disabled, className]
  );

  return {
    getRootProps,
    getInputProps,
    imageUrls,
    errorMessage: customError ?? errorMessage,
    dropZoneClassName,
  };
};
