import PageWrapper from "@/components/pageWrapper/PageWrapper";
import GeneralAccordion from "@/app/[locale]/admin/(admin_pages)/general/_modules/GeneralAccordion/GeneralAccordion";
import { getSocialLinks } from "@/server/actions/FooterService/FooterSocials/getSocialLinks";
import { getCopyright } from "@/server/actions/FooterService/FooterCopyright/getCopyright";
import { getFooterNavigation } from "@/server/actions/FooterService/FooterNavigation/getFooterNavigation";

// eslint-disable-next-line
const GeneratedPage = async () => {
  const socialsBlock = await getSocialLinks();
  const copyrightBlock = await getCopyright();
  const footerNavigation = await getFooterNavigation();
  return (
    <PageWrapper additionalClasses={"items-start"}>
      <div>
        <h1>Generated Page</h1>
      </div>
      <GeneralAccordion
        socials={socialsBlock[0]}
        copyrightBlock={copyrightBlock}
        footerNavigation={footerNavigation}
      />
    </PageWrapper>
  );
};

export default GeneratedPage;
