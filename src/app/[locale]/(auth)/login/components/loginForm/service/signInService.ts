import { signIn } from "next-auth/react";
import { type Inputs } from "@/modules/types/formTypes";

export default async (data: Partial<Inputs>) => {
  const { email, password } = data;

  if (email && password) {
    try {
      return await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
    } catch (e) {
      console.log(e);
      throw "There is an error during logging";
    }
  } else {
    throw "The email or password is missing";
  }
};
