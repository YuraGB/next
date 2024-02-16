"use client";
import { type FC, type ReactNode } from "react";

import { useSocials } from "@/modules/SocialLinks/useSocials";
import SocialLink from "@/modules/SocialLinks/SocialLink";
import { type FooterSocialLinks } from "@/server/actions/FooterService/FooterSocials/types";

const SocialLinks: FC<{ links: FooterSocialLinks[] }> = ({ links }): ReactNode => {
  const { links: linksData } = useSocials(links);

  if (linksData.length === 0) {
    return null;
  }

  return (
    <article
      className={
        "grid size-[100px] grid-cols-2 items-center justify-center gap-1 [justify-items:center]"
      }
    >
      {linksData.map(({ name, url, id }) => (
        <SocialLink name={name} url={url} key={id} />
      ))}
    </article>
  );
};

export default SocialLinks;
