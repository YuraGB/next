import React, { type ReactNode, Suspense } from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import dynamic from "next/dynamic";
const AdminDashboardTabs = dynamic(
  () => import("@admin/(admin_pages)/entities/_modules/adminDashboardTabs/index")
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
