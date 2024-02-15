import bcrypt from "bcrypt";
import { type TCreateUser } from "@/server/actions/UserServises/types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const passwordToHash = (password: string) => {
  if (!password) {
    throw Error("there is no password provided");
  }

  try {
    return bcrypt.hashSync(password, process?.env?.SALT ? Number(process.env.SALT) : 12);
  } catch (e) {
    throw Error("Error hashing password");
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const toComparePasswords = (inputPassword: string, dbPassword: string) => {
  if (!inputPassword) {
    throw Error("there is no password provided");
  }

  return bcrypt.compareSync(inputPassword, dbPassword);
};

export const replacePasswordToHash = (newUser: TCreateUser): TCreateUser => {
  const { data } = newUser;

  if (data.hashPassword) {
    return { ...newUser, data: { ...data, hashPassword: passwordToHash(data.hashPassword) } };
  }

  return newUser;
};
