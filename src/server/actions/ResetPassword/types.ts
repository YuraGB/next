import { z } from "zod";

export const resetPasswordSchema = z.object({
  userId: z.string(),
});

export type TResetPassword = z.infer<typeof resetPasswordSchema>;
