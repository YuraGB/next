import { useMutation } from "@tanstack/react-query";
import { updateSocialLink } from "@/server/actions/FooterService/FooterSocials/updateSocialLink";
import type { TSocialLink } from "@/server/actions/FooterService/FooterSocials/types";

export const useUpdateSocialLinks = () => {
  return useMutation({
    mutationFn: (data: { id: string; data: TSocialLink }) => {
      return updateSocialLink(data);
    },
  });
};