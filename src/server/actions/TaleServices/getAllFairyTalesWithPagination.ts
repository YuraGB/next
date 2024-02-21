"use server";
import { getCountOfAllTales } from "@/server/actions/TaleServices/getCountOfAllTales";
import { getAllFairyTales } from "@/server/actions/TaleServices/getAllFairyTales";
import type { TaleWithRelations } from "@/server/actions/types";

export type TGetAllFairyTalesWithPagination = [number, TaleWithRelations[] | undefined, number];
export const getAllFairyTalesWithPagination = async (
  currentPage = 1
): Promise<TGetAllFairyTalesWithPagination> => {
  try {
    const nextPage = currentPage + 1;
    return await Promise.all([getCountOfAllTales(), getAllFairyTales({ currentPage }), nextPage]);
  } catch (e) {
    throw new Error("Error getting all fairy tales with pagination");
  }
};
