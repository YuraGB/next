"use server";
import prisma from "$prismaClient/prisma";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";

const updateUser = async (user: User): Promise<User> => {
  try {
    return await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: user.name,
        email: user.email,
        hashPassword: user.hashPassword,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error updating user");
  }
};

export default updateUser;
