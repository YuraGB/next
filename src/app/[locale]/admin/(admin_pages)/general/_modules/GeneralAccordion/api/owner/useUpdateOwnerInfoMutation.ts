import { useMutation } from "@tanstack/react-query";
import { type UpdateOwnerInfo } from "@/server/actions/FooterService/FooterOwnerInfo/types";
import { updateOwnerInfo } from "@/server/actions/FooterService/FooterOwnerInfo/updateOwnerInfo";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUpdateOwnerInfoMutation = () => {
  return useMutation({
    mutationFn: (data: UpdateOwnerInfo) => updateOwnerInfo(data),
  });
};
