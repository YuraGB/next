import { type TOwnerInfo } from "@/server/actions/FooterService/FooterOwnerInfo/types";

type TCanSubmit = (n: TOwnerInfo, o: TOwnerInfo) => boolean;

// compare old owner info with new owner info
// if there are differences, return true => can submit
export const canSubmit: TCanSubmit = (newData, oldData) => {
  let hasNewData = false;

  for (const [key, value] of Object.entries(newData)) {
    if (oldData[key as keyof TOwnerInfo] !== value) {
      hasNewData = true;
      break;
    }
  }

  return hasNewData;
};
