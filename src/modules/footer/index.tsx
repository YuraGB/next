"use client";
import { memo, type ReactNode } from "react";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import FooterNavigation from "@/modules/footer/components/FooterNavigation/FooterNavigation";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Copyright from "@/modules/footer/components/Copyright/Copyright";

const Footer = (): ReactNode => {
  return (
    <footer
      className={"mt-auto rounded bg-gray-800 p-6 text-center text-white shadow-lg backdrop-blur"}
    >
      <article
        className={"mb-[50px] grid items-start justify-items-center gap-1 sm:grid-cols-3 sm:gap-3"}
      >
        <SocialLinks />
        <FooterNavigation />
        <ContactInfo />
      </article>
      <Copyright />
    </footer>
  );
};

export default memo(Footer);
