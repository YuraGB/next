import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import React, { type ReactNode } from "react";

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
      <h1>Admin Page Home</h1>
    </PageWrapper>
  );
}
