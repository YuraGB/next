import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import React, { type ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";
const AdminDashboardTabs = dynamic(
  () => import("@/app/[locale]/admin/components/adminDashboardTabs")
);

export const metadata: Metadata = {
  title: "Gyb Nextjs Admin Page",
  description: "testing Nextjs 14 Dashboard",
  keywords: ["yuhur", "Dashboard"],
  authors: [
    {
      name: "Yurii Hurianov",
      url: "https://www.linkedin.com/in/yurii-hurianov-685373172/",
    },
  ],
};

export default function Admin(): ReactNode {
  return (
    <PageWrapper additionalClasses={"items-start"} showBackground={false}>
      <Suspense fallback={<p>Loading</p>}>
        <AdminDashboardTabs />
      </Suspense>
    </PageWrapper>
  );
}
