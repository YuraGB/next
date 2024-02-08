import * as React from "react";
import ERROR_MESSAGES from "@/modules/uploadFiles/utils/errorMessages";
import { type DropzoneOptions, type FileRejection } from "react-dropzone";

export const useErrorMeesages = (
  fileRejections: FileRejection[],
  dropzoneOptions: Omit<DropzoneOptions, "disabled"> | undefined
): string | undefined => {
  return React.useMemo((): string | undefined => {
    if (fileRejections[0]) {
      const { errors } = fileRejections[0];
      if (errors[0]?.code === "file-too-large") {
        return ERROR_MESSAGES.fileTooLarge(dropzoneOptions?.maxSize ?? 0);
      } else if (errors[0]?.code === "file-invalid-type") {
        return ERROR_MESSAGES.fileInvalidType();
      } else if (errors[0]?.code === "too-many-files") {
        return ERROR_MESSAGES.tooManyFiles(dropzoneOptions?.maxFiles ?? 0);
      } else {
        return ERROR_MESSAGES.fileNotSupported();
      }
    }
    return undefined;
  }, [fileRejections, dropzoneOptions]);
};
