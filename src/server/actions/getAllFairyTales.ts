"use server";
import prisma from "$prismaClient/prisma";
import { type TFindAllTales } from "@/server/actions/types";

export const getAllFairyTales = async (): Promise<TFindAllTales[] | undefined> => {
  try {
    return await prisma?.tale.findMany({
      include: {
        categoryTale: {
          select: {
            id: true,
            name: true,
          },
        },
        rating: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error getting all fairy tales");
  }
};
