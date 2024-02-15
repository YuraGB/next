import prisma from "$prismaClient/prisma";
import { z } from "zod";

const commentSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  message: z.string(),
});

export type IContactUs = z.infer<typeof commentSchema>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function addContactUsMessage({ email, name, message }: IContactUs) {
  return prisma?.contactUs.create({
    data: {
      email,
      name,
      message,
    },
  });
}
