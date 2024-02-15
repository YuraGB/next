"use server";
import prisma from "$prismaClient/prisma";
import { type SearchTaleResponse } from "@/server/actions/TaleServices/types";

export default async (value: string): Promise<SearchTaleResponse[] | undefined> => {
  try {
    return await prisma.tale.findMany({
      where: {
        title: {
          contains: value,
        },
      },
      select: {
        title: true,
        id: true,
        categoryTale: true,
        forAge: true,
        content: true,
        shortDescription: true,
        mainImage: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error searching tale");
  }
};
