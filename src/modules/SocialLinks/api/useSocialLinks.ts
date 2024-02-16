import { useQuery } from "@tanstack/react-query";
import { getSocialLinks } from "@/server/actions/FooterService/FooterSocials/getSocialLinks";
import { type SocialLinks } from "@/server/actions/FooterService/FooterSocials/types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSocialLinks = (initData: SocialLinks[]) => {
  const {
    data: footerSocialLinks,
    error,
    status,
  } = useQuery({
    queryKey: ["socialLinks"],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: () => getSocialLinks(),
    initialData: initData,
  });

  return {
    footerSocialLinks,
    error,
    status,
  };
};
