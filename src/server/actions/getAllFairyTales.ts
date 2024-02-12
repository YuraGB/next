"use server";
import prisma from "$prismaClient/prisma";
import { type TaleWithRelations } from "@/server/actions/types";

export const getAllFairyTales = async (): Promise<TaleWithRelations[] | undefined> => {
  try {
    return await prisma?.tale.findMany({
      include: {
        categoryTale: true,
        mainImage: true,
        rating: true,
        comments: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error getting all fairy tales");
  }
};
