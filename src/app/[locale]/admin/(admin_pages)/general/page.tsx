import PageWrapper from "@/components/pageWrapper/PageWrapper";
import GeneralAccordion from "@/app/[locale]/admin/(admin_pages)/general/_modules/GeneralAccordion/GeneralAccordion";
import { getSocialLinks } from "@/server/actions/FooterService/FooterSocials/getSocialLinks";
import { getCopyright } from "@/server/actions/FooterService/FooterCopyright/getCopyright";

// eslint-disable-next-line
const GeneratedPage = async () => {
  const socialsBlock = await getSocialLinks();
  const copyrightBlock = await getCopyright();
  return (
    <PageWrapper additionalClasses={"items-start"}>
      <div>
        <h1>Generated Page</h1>
      </div>
      <GeneralAccordion socials={socialsBlock[0]} copyrightBlock={copyrightBlock} />
    </PageWrapper>
  );
};

export default GeneratedPage;
