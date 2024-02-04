import bcrypt from "bcrypt";
import { type TCreateUser } from "@/server/actions/createUser";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const passwordToHash = (password: string) => {
  if (!password) {
    throw Error("there is no password provided");
  }

  return bcrypt.hashSync(password, process?.env?.SALT ? Number(process.env.SALT) : 12);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const toComparePasswords = (inputPassword: string, dbPassword: string) => {
  if (!inputPassword) {
    throw Error("there is no password provided");
  }

  return bcrypt.compareSync(inputPassword, dbPassword);
};

type NewUser = Pick<TCreateUser, "data">;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const replacePasswordToHash = (newUser: NewUser) => {
  if (!newUser?.data) {
    throw "there is now data about new user";
  }

  const { data } = newUser;

  if (data.hashPassword) {
    return Object.assign({}, data, {
      hashPassword: passwordToHash(data.hashPassword),
    });
  }

  return null;
};
