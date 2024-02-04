import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { type ReactNode } from "react";
const ListOfPosts = dynamic(() => import("@/app/[locale]/blog//components/listOfPosts"));

export const metadata: Metadata = {
  title: "Gyb Nextjs Blog Page",
  description: "testing Nextjs 14 Features page",
  keywords: ["yuhur", "Blog page"],
  authors: [
    {
      name: "Yurii Hurianov",
      url: "https://www.linkedin.com/in/yurii-hurianov-685373172/",
    },
  ],
};

export default function Blog(): ReactNode {
  return (
    <PageWrapper>
      <h1>Blog</h1>
      <ListOfPosts />
    </PageWrapper>
  );
}
