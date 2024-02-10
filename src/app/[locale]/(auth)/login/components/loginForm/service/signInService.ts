import { signIn } from "next-auth/react";
import { type Inputs } from "@/modules/types/formTypes";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (data: Partial<Inputs>) => {
  const { email, password } = data;

  if (email && password) {
    try {
      return await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    } catch (e) {
      console.log(e);
      throw "There is an error during logging";
    }
  } else {
    throw "The email or password is missing";
  }
};
