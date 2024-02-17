import { memo } from "react";
import SocialLinks from "@/modules/SocialLinks/SocialLinks";
import FooterNavigation from "@/modules/footer/components/FooterNavigation/FooterNavigation";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import { getSocialLinks } from "@/server/actions/FooterService/FooterSocials/getSocialLinks";
import { getCopyright } from "@/server/actions/FooterService/FooterCopyright/getCopyright";
import CopyrightComponent from "@/modules/footer/components/Copyright/Copyright";
import { getFooterNavigation } from "@/server/actions/FooterService/FooterNavigation/getFooterNavigation";

// eslint-disable-next-line
const Footer = async () => {
  const links = getSocialLinks();
  const copyrightBlock = getCopyright();
  const footerNav = getFooterNavigation();

  const [socialLinks, copyright, navigationBlock] = await Promise.all([
    links,
    copyrightBlock,
    footerNav,
  ]);

  return (
    <footer
      className={
        "mt-auto rounded bg-gray-800 p-6 px-0 pb-0 text-center text-white shadow-lg backdrop-blur"
      }
    >
      <article
        className={"mb-[50px] grid items-start justify-items-center gap-1 sm:grid-cols-3 sm:gap-3"}
      >
        <SocialLinks links={socialLinks} />
        <FooterNavigation navigationLinks={navigationBlock?.navLinks ?? []} />
        <ContactInfo />
      </article>
      <CopyrightComponent copyright={copyright} />
    </footer>
  );
};

export default memo(Footer);
