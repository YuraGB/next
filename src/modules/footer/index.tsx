import { memo, Suspense } from "react";
import SocialLinks from "@/modules/SocialLinks/SocialLinks";
import FooterNavigation from "@/modules/footer/components/FooterNavigation/FooterNavigation";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Copyright from "@/modules/footer/components/Copyright/Copyright";
import { getSocialLinks } from "@/server/actions/FooterService/FooterSocials/getSocialLinks";
import { getCopyright } from "@/server/actions/FooterService/FooterCopyright/getCopyright";

// eslint-disable-next-line
const Footer = async () => {
  const links = await getSocialLinks();
  const copyright = await getCopyright();

  return (
    <footer
      className={
        "mt-auto rounded bg-gray-800 p-6 px-0 pb-0 text-center text-white shadow-lg backdrop-blur"
      }
    >
      <article
        className={"mb-[50px] grid items-start justify-items-center gap-1 sm:grid-cols-3 sm:gap-3"}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <SocialLinks links={links} />
        </Suspense>
        <FooterNavigation />
        <ContactInfo />
      </article>
      <Suspense fallback={<div>Loading...</div>}>
        <Copyright copyright={copyright} />
      </Suspense>
    </footer>
  );
};

export default memo(Footer);
