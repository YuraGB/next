import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import React, { type ReactNode } from "react";
import HomePageIntro from "@/modules/homePageIntro";
import Logo from "@/components/Logo/Logo";
import HomePageSlider from "@/modules/homePageSlider";
import Avatar from "@/modules/comments/components/Avatar/Avatar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fairy Tales Catalog Home page",
  description: "Introduction to the Fairy Tales Website",
  keywords: ["fairy tales", "home page"],
  robots: "index, follow",
};

export const preferredRegion = ["fra1"];

export default function Home(): ReactNode {
  return (
    <PageWrapper>
      <Image src={"/vercel.svg"} alt="Avatar" width={100} height={100} />
    </PageWrapper>
  );
}
