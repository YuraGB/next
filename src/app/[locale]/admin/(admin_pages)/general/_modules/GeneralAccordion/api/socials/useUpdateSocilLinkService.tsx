import { useMutation } from "@tanstack/react-query";
import {
  type TUpdateSocialLink,
  useUpdateSocialLink,
} from "@/server/actions/FooterService/FooterSocials/updateSocialLink";

// eslint-disable-next-line
const useUpdateSocialLinkService = () => {
  return useMutation({
    mutationFn: (data: TUpdateSocialLink) => {
      return useUpdateSocialLink(data);
    },
  });
};
