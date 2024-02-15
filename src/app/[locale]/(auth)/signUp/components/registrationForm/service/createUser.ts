"use server";
import { replacePasswordToHash } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/util/validateUser";
import { createUser as createNewUser } from "@/server/actions/UserServises/createUser";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";
import { type TErrorObject } from "@/server/actions/types";
import { type TCreateUser } from "@/server/actions/UserServises/types";

export const createUser = async (
  newUser: TCreateUser
): Promise<Pick<User, "email" | "hashPassword"> | TErrorObject> => {
  const userDataWithHashedPassword = replacePasswordToHash(newUser);

  if (userDataWithHashedPassword?.data?.hashPassword) {
    try {
      return await createNewUser(userDataWithHashedPassword);
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
