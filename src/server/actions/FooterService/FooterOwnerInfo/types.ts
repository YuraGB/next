import { z } from "zod";

export const ownerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
});

export type TOwnerInfo = z.infer<typeof ownerSchema>;

export const updateOwnerSchema = z.object({
  id: z.string(),
  data: ownerSchema,
});

export type UpdateOwnerInfo = z.infer<typeof updateOwnerSchema>;
