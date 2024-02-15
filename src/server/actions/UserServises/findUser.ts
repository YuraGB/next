"use server";
import prisma from "$prismaClient/prisma";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";
import { z } from "zod";

const FindUserSchema = z.string().email();

type TFindUser = z.infer<typeof FindUserSchema>;
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export const findUser = async (email: TFindUser): Promise<User | null | undefined> => {
  if (!FindUserSchema.safeParse(email).success) {
    return null;
  }

  if (prisma === null || prisma === undefined) {
    throw "prisma absent";
  }

  try {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error finding user");
  }
};
