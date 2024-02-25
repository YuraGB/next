"use server";
import prisma from "$prismaClient/prisma";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";
import { passwordToHash } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/util/validateUser";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const updateUser = async (user: Partial<User>) => {
  try {
    const { id, ...rest } = user;

    const { hashPassword } = rest;
    if (hashPassword) {
      rest.hashPassword = passwordToHash(hashPassword);
    }

    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...rest,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error updating user");
  }
};

export default updateUser;
