import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import React, { type ReactNode } from "react";
import AdminHomeRatingChart from "@admin/_modules/AdminHomeRatingChart";
import AdminLatestComments from "@admin/_modules/AdminLatestComments";

export const metadata: Metadata = {
  title: "Gyb Nextjs Admin Page",
  description: "testing Nextjs 14 Dashboard",
  authors: [
    {
      name: "Yurii Hurianov",
      url: "https://www.linkedin.com/in/yurii-hurianov-685373172/",
    },
  ],
};

export default function Admin(): ReactNode {
  return (
    <PageWrapper additionalClasses={"items-start"}>
      <h1 className={"mb-4 text-2xl font-bold"}>Admin Page Home</h1>
      <article className={"grid w-full grid-cols-2 gap-2"}>
        <section className={"relative flex max-w-full justify-center"}>
          <AdminHomeRatingChart />
        </section>
        <section className={"relative flex max-w-full justify-center"}>
          <AdminLatestComments />
        </section>
      </article>
    </PageWrapper>
  );
}
