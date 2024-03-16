import { useMutation } from "@tanstack/react-query";
import {
  type TUpdateSocialLinks,
  useUpdateSocialLinks,
} from "@/server/actions/FooterService/FooterSocials/updateSocialLinks";

// eslint-disable-next-line
const useUpdateSocilsService = () => {
  return useMutation({
    mutationFn: (data: TUpdateSocialLinks) => {
      return useUpdateSocialLinks(data);
    },
  });
};
