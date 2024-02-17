"use server";
import { type TFooterNavigationSchema } from "@/server/actions/FooterService/FooterNavigation/types";
import { type FooterNavigation } from ".prisma/client";
import prisma from "$prismaClient/prisma";

export const updateFooterNavigation = async (
  id: string,
  data: TFooterNavigationSchema
): Promise<FooterNavigation | undefined> => {
  const { navLinks } = data;
  const navLinksObj = {
    navLinks: {
      // clear all navLinks
      set: [],
      // connect or create new navLinks
      connectOrCreate: navLinks.map((navLink) => ({
        where: {
          name: navLink.name,
        },
        create: {
          name: navLink.name,
          url: navLink.url,
        },
      })),
    },
  };

  const updateObj = {
    where: { id },
    data: {
      ...navLinksObj,
    },
  };

  return prisma?.footerNavigation.update(updateObj);
};
