import PageWrapper from "@/components/pageWrapper/PageWrapper";
import GeneralAccordion from "@/app/[locale]/admin/(admin_pages)/general/_modules/GeneralAccordion/GeneralAccordion";
import { getSocialLinks } from "@/server/actions/FooterService/FooterSocials/getSocialLinks";
import { getCopyright } from "@/server/actions/FooterService/FooterCopyright/getCopyright";
import { getFooterNavigation } from "@/server/actions/FooterService/FooterNavigation/getFooterNavigation";
import { getOwnerInfo } from "@/server/actions/FooterService/FooterOwnerInfo/getOwnerInfo";
import PageTitle from "@admin/(admin_pages)/general/_components/PageTitle";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const GeneratedPage = async () => {
  const socialsBlock = getSocialLinks();
  const copyrightBlock = getCopyright();
  const footerNavigation = getFooterNavigation();
  const footerOwnerInfo = getOwnerInfo();

  const [socials, copyright, footerNav, ownerInfo] = await Promise.all([
    socialsBlock,
    copyrightBlock,
    footerNavigation,
    footerOwnerInfo,
  ]);

  return (
    <PageWrapper additionalClasses={"items-start"}>
      <PageTitle />
      <GeneralAccordion
        socials={socials[0]}
        copyrightBlock={copyright}
        footerNavigation={footerNav}
        footerOwnerInfo={ownerInfo}
      />
    </PageWrapper>
  );
};

export default GeneratedPage;
