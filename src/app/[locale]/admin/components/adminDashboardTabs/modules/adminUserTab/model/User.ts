import { type $Enums } from ".prisma/client";

export type User = {
  id: string;
  email: string;
  name: string;
  role: $Enums.Role;
  hashPassword: string;
  imageUrl: string | null;
  refreshToken: string | null;
  accessToken: string | null;
  accessTokenExpires: Date | null;
};
