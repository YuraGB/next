"use server";
import { getCountOfAllTales } from "@/server/actions/TaleServices/getCountOfAllTales";
import { getAllFairyTales } from "@/server/actions/TaleServices/getAllFairyTales";
import {
  LIMIT,
  type TGetAllFairyTalesWithPagination,
  type TProps,
} from "@/server/actions/TaleServices/types";

export const getAllFairyTalesWithPagination = async ({
  currentPage = 1,
  filters,
}: TProps): Promise<TGetAllFairyTalesWithPagination> => {
  const count = await getCountOfAllTales();

  let nextPage: number | null = currentPage + 1;

  if (nextPage * LIMIT >= count) {
    nextPage = null;
  }

  try {
    return await Promise.all([count, getAllFairyTales({ currentPage, filters }), nextPage]);
  } catch (e) {
    throw new Error("Error getting all fairy tales with pagination");
  }
};
