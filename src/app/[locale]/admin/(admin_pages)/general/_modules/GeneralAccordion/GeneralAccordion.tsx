"use client";
import { type ReactNode } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import SocialBlockAdmin from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/SocialsBlockAdmin/SocialBlockAdmin";
import { type FooterSocialLinks } from "@/server/actions/FooterService/FooterSocials/types";
import { type Copyright } from ".prisma/client";
import CopyrightAdmin from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/Copyright/CopyrightAdmin";
import { type TFooterNavWithLinks } from "@/server/actions/FooterService/FooterNavigation/types";
import FooterNavigation from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/FooterNavigation/FooterNavigation";

type GeneralAccordionProps = {
  socials: FooterSocialLinks;
  copyrightBlock: Copyright | null | undefined;
  footerNavigation: TFooterNavWithLinks | null | undefined;
};

const GeneralAccordion = ({
  socials,
  copyrightBlock,
  footerNavigation,
}: GeneralAccordionProps): ReactNode => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <article className={"w-full"}>
      <h3 className={"my-3 text-center align-middle text-xl font-bold"}>Footer</h3>
      <Accordion>
        <AccordionItem key="1" aria-label="Footer Navigation" title="Footer Navigation">
          <FooterNavigation footerNavigation={footerNavigation} />
        </AccordionItem>
        <AccordionItem key="2" aria-label="Footer Socials" title="Footer socials">
          <SocialBlockAdmin footerSocials={socials} />
        </AccordionItem>
        <AccordionItem key="3" aria-label="Footer Company info" title="Footer company info">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="4" aria-label="Footer copyright" title="Footer copyright">
          <CopyrightAdmin copyrightBlock={copyrightBlock} />
        </AccordionItem>
      </Accordion>
    </article>
  );
};

export default GeneralAccordion;
