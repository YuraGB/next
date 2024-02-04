import Link from "next/link";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import { Pages } from "@/utils/pages";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gyb Nextjs Access Denied Page",
  description: "testing Nextjs 14 Permission denied",
  keywords: ["yuhur", "Denied page"],
  authors: [
    {
      name: "Yurii Hurianov",
      url: "https://www.linkedin.com/in/yurii-hurianov-685373172/",
    },
  ],
};

export default function Denied(): ReactNode {
  return (
    <PageWrapper>
      <h1>Denied</h1>
      <Link href={Pages.HOME}>Home</Link>
    </PageWrapper>
  );
}
