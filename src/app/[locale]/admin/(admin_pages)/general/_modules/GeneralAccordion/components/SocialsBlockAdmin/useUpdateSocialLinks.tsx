import { useMutation } from "@tanstack/react-query";
import { useUpdateSocialLink } from "@/server/actions/FooterService/FooterSocials/updateSocialLink";
import type { TSocialLink } from "@/server/actions/FooterService/FooterSocials/types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUpdateSocialLinks = () => {
  return useMutation({
    mutationFn: (data: { id: string; data: TSocialLink }) => {
      return useUpdateSocialLink(data);
    },
  });
};
