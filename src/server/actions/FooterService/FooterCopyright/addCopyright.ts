"use server";
import prisma from "$prismaClient/prisma";
import { z } from "zod";
import { type Copyright } from ".prisma/client";

const copyrightSchema = z.object({
  content: z.string({
    required_error: "Content is required",
    invalid_type_error: "Content must be a string",
  }),
  year: z.string({
    required_error: "Year is required",
    invalid_type_error: "Year must be a string",
  }),
  owner: z.string({
    required_error: "Owner is required",
    invalid_type_error: "Owner must be a string",
  }),
});

export type TCopyrightSchema = z.infer<typeof copyrightSchema>;

export const addCopyright = async (
  copyrightData: TCopyrightSchema
): Promise<Omit<Copyright, "id" | "updatedAt" | "createdAt"> | undefined> => {
  if (!copyrightSchema.safeParse(copyrightData).success) {
    throw new Error("Invalid data");
  }

  const { content, year, owner } = copyrightData;
  try {
    return await prisma?.copyright.create({
      data: {
        content,
        year,
        owner,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error creating category");
  }
};
