"use server";
import prisma from "$prismaClient/prisma";
import { type CategoryTale } from "@prisma/client";

export default async (): Promise<CategoryTale[] | undefined> => {
  try {
    return await prisma.categoryTale.findMany();
  } catch (e) {
    console.log(e);
    throw new Error("Error getting categories");
  }
};
