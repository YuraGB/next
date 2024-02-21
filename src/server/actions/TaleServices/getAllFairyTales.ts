"use server";
import prisma from "$prismaClient/prisma";
import { type TaleWithRelations } from "@/server/actions/types";

const LIMIT = 2;

type TProps = {
  currentPage?: number;
};

export const getAllFairyTales = async ({ currentPage }: TProps): Promise<TaleWithRelations[]> => {
  let config = {};
  const defaultConfig = {
    include: {
      categoryTale: true,
      mainImage: true,
      rating: true,
      comments: true,
      images: true,
    },
  };

  if (currentPage === 0 || currentPage) {
    config = {
      skip: currentPage === 0 ? 0 : currentPage * LIMIT,
      take: LIMIT,
      ...defaultConfig,
    };
  } else {
    config = {
      ...defaultConfig,
    };
  }

  try {
    // eslint-disable-next-line
    // @ts-ignore
    return await prisma?.tale.findMany(config);
  } catch (e) {
    console.log(e);
    throw new Error("Error getting all fairy tales");
  }
};
