"use server";
import prisma from "$prismaClient/prisma";
import { type TaleWithRelations } from "@/server/actions/types";
import { LIMIT, type TProps } from "@/server/actions/TaleServices/types";
import { setFilters } from "@/server/actions/TaleServices/util/setFilters";

export const getAllFairyTales = async ({
  currentPage,
  filters,
}: TProps): Promise<TaleWithRelations[]> => {
  let config: NonNullable<unknown>;
  const defaultConfig = {
    include: {
      categoryTale: true,
      mainImage: true,
      rating: true,
      comments: true,
      images: true,
    },
  };

  const filtersConfig = setFilters(filters);

  if (currentPage === 0 || currentPage) {
    config = {
      skip: currentPage === 0 ? 0 : currentPage * LIMIT,
      take: LIMIT,
      ...defaultConfig,
      ...filtersConfig,
    };
  } else {
    config = {
      ...defaultConfig,
      ...filtersConfig,
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
