import prisma from "$prismaClient/prisma";
import { type User } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const updateUser = async (user: User) => {
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
