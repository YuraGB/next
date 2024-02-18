"use server";
import prisma from "$prismaClient/prisma";
import { type OwnerInfo, Prisma } from ".prisma/client";
import Prisma__OwnerInfoClient = Prisma.Prisma__OwnerInfoClient;

export const getOwnerInfo = (): Prisma__OwnerInfoClient<OwnerInfo | undefined | null> => {
  try {
    return prisma?.ownerInfo.findFirst();
  } catch (e) {
    console.error(e);
    throw new Error("There is an error during getting owner info");
  }
};
