"use server";
import prisma from "$prismaClient/prisma";
import { type Comment } from ".prisma/client";

export type TGetAllComments = Comment[];

export const getAllComments = async (): Promise<TGetAllComments> => {
  const comments = await prisma.comment.findMany();
  return comments;
};
