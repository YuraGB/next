import { type ReactNode } from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import GeneralAccordion from "@/app/[locale]/admin/(admin_pages)/general/_modules/GeneralAccordion/GeneralAccordion";

const GeneratedPage = (): ReactNode => {
  return (
    <PageWrapper additionalClasses={"items-start"}>
      <div>
        <h1>Generated Page</h1>
      </div>
      <GeneralAccordion />
    </PageWrapper>
  );
};

export default GeneratedPage;
