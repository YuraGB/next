import { type MutableRefObject, type ReactNode } from "react";
import variants from "@/modules/uploadFiles/utils/variants";
import { CircleProgress } from "@/modules/uploadFiles/components/CircleProgress/CircleProgress";
import { X } from "lucide-react";
import * as React from "react";
import { type FileState } from "@/modules/uploadFiles/components/MultipleUpload/MultipleLoad";
import { type TUploadFiles } from "@/modules/uploadFiles/components/MultipleUpload/useHelper";

type TProps = {
  value?: FileState[];
  imageUrls: string[];
  disabled?: boolean;
  onChange?: (files: FileState[]) => void | Promise<void>;
  uploadFiles?: MutableRefObject<TUploadFiles>;
};

const MultipleImagesContainer = ({
  value,
  imageUrls,
  disabled,
  onChange,
  uploadFiles,
}: TProps): ReactNode | null => {
  if (!value || value.length === 0) return null;

  return value.map(({ file, progress }, index) => (
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

            if (uploadFiles?.current) {
              uploadFiles.current = uploadFiles.current.filter((_, i) => i !== index);
            }

            return onChange?.(value.filter((_, i) => i !== index) ?? []);
          }}
        >
          <div className="flex size-5 cursor-pointer items-center justify-center rounded-md border border-solid border-gray-500 bg-white transition-all duration-300 hover:size-6 dark:border-gray-400 dark:bg-black">
            <X className="text-gray-500 dark:text-gray-400" width={16} height={16} />
          </div>
        </div>
      )}
    </div>
  ));
};

export default MultipleImagesContainer;
