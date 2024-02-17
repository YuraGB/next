import { z } from "zod";

export const copyrightUpdateSchema = z.object({
  id: z.string(),
  data: z.object({
    content: z.string(),
    owner: z.string(),
    year: z.string(),
  }),
});

export type TCopyrightUpdate = z.infer<typeof copyrightUpdateSchema>;
