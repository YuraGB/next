"use server";
import { getCountOfAllTales } from "@/server/actions/TaleServices/getCountOfAllTales";
import { getAllFairyTales } from "@/server/actions/TaleServices/getAllFairyTales";
import type { TaleWithRelations } from "@/server/actions/types";
import { LIMIT } from "@/server/actions/TaleServices/types";

export type TGetAllFairyTalesWithPagination = [
  number,
  TaleWithRelations[] | undefined,
  number | null,
];
export const getAllFairyTalesWithPagination = async (
  currentPage = 1
): Promise<TGetAllFairyTalesWithPagination> => {
  const count = await getCountOfAllTales();

  let nextPage: number | null = currentPage + 1;

  if (nextPage * LIMIT >= count) {
    nextPage = null;
  }

  try {
    return await Promise.all([count, getAllFairyTales({ currentPage }), nextPage]);
  } catch (e) {
    throw new Error("Error getting all fairy tales with pagination");
  }
};
