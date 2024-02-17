import { useMutation } from "@tanstack/react-query";
import { updateCopyright } from "@/server/actions/FooterService/FooterCopyright/updateCopyright";
import { type TCopyrightUpdate } from "@/server/actions/FooterService/FooterCopyright/types";

// eslint-disable-next-line
export const useUpdateCopyright = () => {
  return useMutation({
    mutationFn: (updateData: TCopyrightUpdate) => updateCopyright(updateData),
  });
};
