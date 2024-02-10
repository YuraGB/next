type Messages = {
  [key: string]: string;
  default: string;
};

export type TErrorMessagesList = Record<string, Messages>;

export const errorMessages: TErrorMessagesList = {
  P2002: {
    User_email_key: "This email is already taken",
    default: "Something went wrong when creating the user",
  },
};
