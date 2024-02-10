"use server";
import { replacePasswordToHash } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/util/validateUser";
import { createUser as createNewUser, type TCreateUser } from "@/server/actions/createUser";
import { type User } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User";
import { type TErrorObject } from "@/server/actions/types";

export const createUser = async (
  newUser: TCreateUser
): Promise<Pick<User, "email" | "hashPassword"> | TErrorObject> => {
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
      return {
        isError: true,
        errorCode: "500",
        message: "Error creating user",
      };
    }
  }
  return {
    isError: true,
    errorCode: "500",
    message: "Error creating user",
  };
};
