"use client";
import * as React from "react";
import { type DropzoneOptions } from "react-dropzone";
import { useMultipleLoad } from "@/modules/uploadFiles/components/MultipleUpload/useMultipleLoad";
import { UploadCloudIcon, X } from "lucide-react";
import Button from "@/modules/uploadFiles/utils/Button";
import { CircleProgress } from "@/modules/uploadFiles/components/CircleProgress/CircleProgress";
import variants from "@/modules/uploadFiles/utils/variants";

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
};

const MultiImageDropzone = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { value, disabled, onChange, dropzoneOptions } = props;
  console.log(value);
  const { getRootProps, getInputProps, imageUrls, errorMessage, dropZoneClassName } =
    useMultipleLoad(props);

  return (
    <div>
      <div className="grid grid-cols-[repeat(1,1fr)] gap-2 sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
        {/* Images */}
        {value?.map(({ file, progress }, index) => (
          <div
            key={typeof file === "string" ? file : file.name}
            className={variants.image + " aspect-square h-full"}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="size-full rounded-md object-cover"
              src={imageUrls[index]}
              loading={"lazy"}
              width={0}
              height={0}
              alt={typeof file === "string" ? file : file.name}
            />
            {/* Progress Bar */}
            {typeof progress === "number" && (
              <div className="absolute left-0 top-0 flex size-full items-center justify-center rounded-md bg-black bg-opacity-[0.7]">
                <CircleProgress progress={progress} />
              </div>
            )}
            {/* Remove Image Icon */}
            {imageUrls[index] && !disabled && progress !== "PENDING" && (
              <div
                className="group absolute right-0 top-0 -translate-y-1/4 translate-x-1/4"
                onClick={(e) => {
                  e.stopPropagation();
                  void onChange?.(value.filter((_, i) => i !== index) ?? []);
                }}
              >
                <div className="flex size-5 cursor-pointer items-center justify-center rounded-md border border-solid border-gray-500 bg-white transition-all duration-300 hover:size-6 dark:border-gray-400 dark:bg-black">
                  <X className="text-gray-500 dark:text-gray-400" width={16} height={16} />
                </div>
              </div>
            )}
          </div>
        ))}
        {/* Dropzone */}
        {(!value || value.length < (dropzoneOptions?.maxFiles ?? 0)) && (
          <div
            {...getRootProps({
              className: dropZoneClassName,
            })}
          >
            {/* Main File Input */}
            <input ref={ref} {...getInputProps()} />
            <div className="flex flex-col items-center justify-center text-xs text-gray-400">
              <UploadCloudIcon className="mb-2 size-7" />
              <div className="text-gray-400">drag & drop to upload</div>
              <div className="mt-3">
                <Button disabled={disabled}>select</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Error Text */}
      <div className="mt-1 text-xs text-red-500">{errorMessage}</div>
    </div>
  );
});
MultiImageDropzone.displayName = "MultiImageDropzone";

export { MultiImageDropzone };
