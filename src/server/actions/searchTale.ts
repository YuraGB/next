"use server";
import prisma from "$prismaClient/prisma";
import { type CategoryTale } from "@prisma/client";
import { type Image } from ".prisma/client";

export type SearchTaleResponse = {
  title: string;
  id: string;
  categoryTale: CategoryTale;
  forAge: string;
  mainImage: Image;
  content: string;
  shortDescription: string;
};

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
