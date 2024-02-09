import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { type Metadata } from "next";
import React, { type ReactNode } from "react";
import HomePageIntro from "@/modules/homePageIntro";
import Logo from "@/components/Logo/Logo";
import HomePageSlider from "@/modules/homePageSlider";

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
      <Logo />
      <HomePageIntro />
      <HomePageSlider />
    </PageWrapper>
  );
}
