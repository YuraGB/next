import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import TalesList from "@/app/[locale]/fairyTales/modules/components/talesList/talesList";
import PageTitle from "@/app/[locale]/fairyTales/components/pageTitle/PageTitle";
import { type ReactNode, Suspense } from "react";
import BreadcrumbsModule from "@/modules/Breadcrumbs/Breadcrumbs";
import TalesListSkeleton from "@/app/[locale]/fairyTales/modules/components/talesList/taleListSkeleton";

export const metadata: Metadata = {
  title: "Fairy tales page",
  description: "Catalog of the Fairy Tales",
  keywords: ["Fairy tales", "Catalog of the Fairy Tales"],
  robots: "index, follow",
  authors: [
    {
      name: "Yurii Hurianov",
      url: "https://www.linkedin.com/in/yurii-hurianov-685373172/",
    },
  ],
};

export default function FairyTales(): ReactNode {
  return (
    <PageWrapper>
      <BreadcrumbsModule current={"Catalog of the Tales"} currentId={"catalog.page"} />
      <PageTitle />
      <Suspense fallback={<TalesListSkeleton />}>
        <TalesList />
      </Suspense>
    </PageWrapper>
  );
}
