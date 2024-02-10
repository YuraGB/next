import { type TErrorObject } from "@/server/actions/types";
import { errorMessages } from "@/utils/errorMessages";

export const getErrorMessage = (errorObj: TErrorObject): string => {
  const byDefault = "Something went wrong. Please try again later.";

  if (errorObj.isError && errorObj.errorCode) {
    const { meta, errorCode } = errorObj;

    if (Boolean(errorMessages[errorCode])) {
      if (meta?.target) {
        return errorMessages[errorCode][meta.target as string];
      }
      return errorMessages[errorCode].default;
    }
  }
  return byDefault;
};
