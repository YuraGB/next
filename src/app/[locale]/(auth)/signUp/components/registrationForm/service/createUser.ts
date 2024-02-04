"use server";
import prisma from "$prismaClient/prisma";
import { replacePasswordToHash } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/util/validateUser";
import { findUser } from "@/server/actions/findUser";
import { createUser as createNewUser, type TCreateUser } from "@/server/actions/createUser";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createUser = async (newUser: TCreateUser) => {
  if (prisma === null || prisma === undefined) {
    throw "prisma absent";
  }

  if (!newUser?.data?.email || !newUser?.data?.hashPassword || !newUser?.data?.name) {
    throw "Not all user data provided";
  }

  const findMatch = await findUser(newUser.data.email);

  if (findMatch) {
    throw "This email is already registered";
  }

  const userDataWithHashedPassword = replacePasswordToHash(newUser);

  if (userDataWithHashedPassword?.hashPassword) {
    const newUserData = {
      data: userDataWithHashedPassword,
      select: newUser.select,
    };
    try {
      return await createNewUser(newUserData);
    } catch (e) {
      console.log(e);
    }
  }

  throw "Something went wrong";
};
