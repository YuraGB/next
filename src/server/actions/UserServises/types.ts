import { z } from "zod";
import { $Enums } from ".prisma/client";
import Role = $Enums.Role;

export const UserSchema = z.object({
  data: z.object({
    name: z.string(),
    email: z.string().email(),
    hashPassword: z.string(),
    role: z.enum([Role.ADMIN, Role.USER, Role.VISITOR]).optional(),
  }),
  select: z.object({
    email: z.boolean(),
    hashPassword: z.boolean(),
  }),
});

export type TCreateUser = z.infer<typeof UserSchema>;
