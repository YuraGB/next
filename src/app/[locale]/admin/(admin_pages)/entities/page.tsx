import React, { type ReactNode, Suspense } from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import dynamic from "next/dynamic";
const AdminDashboardTabs = dynamic(
  () => import("@/app/[locale]/admin/components/adminDashboardTabs/index")
);

const EntitiesPage = (): ReactNode => {
  return (
    <PageWrapper additionalClasses={"items-start"}>
      <Suspense fallback={<p>Loading</p>}>
        <AdminDashboardTabs />
      </Suspense>
    </PageWrapper>
  );
};

export default EntitiesPage;
