import crypto from "crypto";

export const createToken = (): string => {
  return crypto.randomBytes(64).toString("hex");
};
