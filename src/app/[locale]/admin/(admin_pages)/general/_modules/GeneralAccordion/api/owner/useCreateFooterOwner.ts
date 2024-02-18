import { useMutation } from "@tanstack/react-query";
import { addOwnerInfo } from "@/server/actions/FooterService/FooterOwnerInfo/addOwherInfo";
import { type TOwnerInfo } from "@/server/actions/FooterService/FooterOwnerInfo/types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCreateFooterOwner = () => {
  return useMutation({
    mutationFn: (data: TOwnerInfo) => {
      return addOwnerInfo(data);
    },
  });
};
