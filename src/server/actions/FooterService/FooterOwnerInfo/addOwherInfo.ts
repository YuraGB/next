"use server";
import prisma from "$prismaClient/prisma";
import { type TOwnerInfo, ownerSchema } from "@/server/actions/FooterService/FooterOwnerInfo/types";

// eslint-disable-next-line
export const addOwnerInfo = async (data: TOwnerInfo) => {
  if (!ownerSchema.safeParse(data)) {
    throw new Error("Invalid owner data");
  }
  try {
    return await prisma?.ownerInfo.create({ data });
  } catch (e) {
    console.error(e);
    throw new Error("There is an error during getting owner info");
  }
};
