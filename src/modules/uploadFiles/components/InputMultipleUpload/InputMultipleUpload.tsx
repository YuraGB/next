import { UploadCloudIcon } from "lucide-react";
import * as React from "react";
import { type MutableRefObject, type ReactNode } from "react";
import type { DropzoneInputProps, DropzoneOptions, DropzoneRootProps } from "react-dropzone";
import { type FileState } from "@/modules/uploadFiles/components/MultipleUpload/MultipleLoad";
import { type TUploadFiles } from "@/modules/uploadFiles/components/MultipleUpload/useHelper";
import { Button } from "@nextui-org/button";

export type InputProps = {
  className?: string;
  value?: FileState[];
  onChange?: (files: FileState[]) => void | Promise<void>;
  onFilesAdded?: (addedFiles: FileState[]) => void | Promise<void>;
  disabled?: boolean;
  dropzoneOptions?: Omit<DropzoneOptions, "disabled">;
  uploadFiles?: MutableRefObject<TUploadFiles>;
  dropZoneClassName: string;
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
};

const InputMultipleUpload = ({
  value,
  dropzoneOptions,
  dropZoneClassName,
  getRootProps,
  disabled,
}: InputProps): ReactNode | null => {
  if (!value || value.length < (dropzoneOptions?.maxFiles ?? 0))
    return (
      <div
        {...getRootProps({
          className: dropZoneClassName,
        })}
      >
        {/* Main File Input */}

        <div className="flex flex-col items-center justify-center text-xs text-gray-400">
          <UploadCloudIcon className="mb-2 size-7" />
          <div className="text-gray-400">drag & drop to upload</div>
          <div className="mt-3">
            <Button disabled={disabled}>select</Button>
          </div>
        </div>
      </div>
    );

  return null;
};

export default InputMultipleUpload;
