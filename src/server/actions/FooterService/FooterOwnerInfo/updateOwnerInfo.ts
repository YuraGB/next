"use server";
import prisma from "$prismaClient/prisma";
import {
  type UpdateOwnerInfo,
  updateOwnerSchema,
} from "@/server/actions/FooterService/FooterOwnerInfo/types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const updateOwnerInfo = (newData: UpdateOwnerInfo) => {
  if (!updateOwnerSchema.safeParse(newData)) {
    throw new Error("Invalid owner data");
  }

  try {
    return prisma?.ownerInfo.update({ where: { id: newData.id }, data: newData.data });
  } catch (e) {
    console.error(e);
    throw new Error("There is an error during getting owner info");
  }
};
