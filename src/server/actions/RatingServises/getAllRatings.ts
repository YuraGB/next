"use server";
import prisma from "$prismaClient/prisma";
import { type Rating } from ".prisma/client";

export type TGetAllRatings = Array<Pick<Rating, "rating" | "count">>;

export const getAllRatings = async (): Promise<TGetAllRatings> => {
  const response = await prisma.rating.findMany();
  return response.map((rate) => {
    return {
      count: rate.count,
      rating: rate.rating,
    };
  });
};

export const getAllRatingsFromTales = async (): Promise<TGetAllRatings> => {
  const response = await prisma.tale.findMany({
    select: {
      rating: true,
    },
  });

  const formatResponse = response.map(({ rating }) => {
    return {
      count: rating?.count ?? 0,
      rating: rating?.rating ?? 0,
    };
  });

  return formatResponse.filter((rate) => rate.count && rate.rating);
};
