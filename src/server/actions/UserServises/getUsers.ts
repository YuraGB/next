"use server";
import prisma from "$prismaClient/prisma";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";
type GetUsersT = () => Promise<User[] | null | undefined>;

export const getUsers: GetUsersT = async () => {
  try {
    return await prisma?.user.findMany();
  } catch (e) {
    console.log(e);
    throw new Error("Error getting users");
  }
};
