"use server";
import prisma from "$prismaClient/prisma";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { type TErrorObject } from "@/server/actions/types";
import { type TCreateUser, UserSchema } from "@/server/actions/UserServises/types";

export const createUser = async (
  user: TCreateUser
): Promise<Pick<User, "email" | "hashPassword"> | TErrorObject> => {
  if (!UserSchema.safeParse(user).success) {
    throw "Not all user data provided";
  }
  try {
    return await prisma.user.create(user);
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      console.log(e);
      return {
        isError: true,
        errorCode: e.code,
        message: e.message,
        meta: e.meta,
      };
    }

    console.log(e);
    throw new Error("Error creating user");
  }
};
