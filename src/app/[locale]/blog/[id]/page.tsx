import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import React from "react";

export const dynamicParams = true;

export const metadata: Metadata = {
  title: "Gyb Nextjs Blog Post Page",
  description: "testing Nextjs 14 Blog post page",
  keywords: ["yuhur", "Blog post page"],
  authors: [
    {
      name: "Yurii Hurianov",
      url: "https://www.linkedin.com/in/yurii-hurianov-685373172/",
    },
  ],
};

export default function BlogPost(): React.ReactNode {
  return (
    <PageWrapper>
      <h1>BlogPost</h1>
    </PageWrapper>
  );
}
