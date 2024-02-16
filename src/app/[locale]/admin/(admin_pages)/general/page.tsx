import PageWrapper from "@/components/pageWrapper/PageWrapper";
import GeneralAccordion from "@/app/[locale]/admin/(admin_pages)/general/_modules/GeneralAccordion/GeneralAccordion";
import { getSocialLinks } from "@/server/actions/FooterService/FooterSocials/getSocialLinks";

// eslint-disable-next-line
const GeneratedPage = async () => {
  const socialsBlock = await getSocialLinks();
  return (
    <PageWrapper additionalClasses={"items-start"}>
      <div>
        <h1>Generated Page</h1>
      </div>
      <GeneralAccordion socials={socialsBlock[0]} />
    </PageWrapper>
  );
};

export default GeneratedPage;
