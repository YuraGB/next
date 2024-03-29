import { useMemo } from "react";
import { type SocialItem } from ".prisma/client";
import { type FooterSocialLinks } from "@/server/actions/FooterService/FooterSocials/types";

type TUseSocials = {
  links: SocialItem[];
};
export const useSocials = (initialValue: FooterSocialLinks[]): TUseSocials => {
  const links = useMemo(() => {
    if (initialValue?.length && initialValue[0].socials?.length > 0) {
      return initialValue[0].socials;
    }
    return [];
  }, [initialValue]);

  return {
    links,
  };
};
