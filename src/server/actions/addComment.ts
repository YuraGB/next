"use server";
import prisma from "$prismaClient/prisma";
import { type CommentWithUser } from "@/server/actions/types";
import { z } from "zod";

const CommentSchema = z.object({
  comment: z.string(),
  taleId: z.string(),
  user: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
});

export type TCreateComment = z.infer<typeof CommentSchema>;

type TAddComment = (data: TCreateComment) => Promise<CommentWithUser | undefined>;

export const addComment: TAddComment = async (data) => {
  if (!CommentSchema.safeParse(data).success) {
    throw "Not all comment data provided";
  }

  try {
    return await prisma.comment.create({
      data: {
        content: data.comment,
        tale: {
          connect: {
            id: data.taleId,
          },
        },
        user: {
          connectOrCreate: {
            where: {
              email: data.user.email,
            },
            create: {
              name: data.user.name,
              email: data.user.email,
              hashPassword: "",
              role: "VISITOR",
            },
          },
        },
      },
      include: {
        user: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error creating comment");
  }
};
