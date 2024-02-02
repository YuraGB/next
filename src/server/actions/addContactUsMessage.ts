import prisma from '$prismaClient/prisma'
import { z } from 'zod'

const commentSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  message: z.string(),
})

export type IContactUs = z.infer<typeof commentSchema>

export default async function addContactUsMessage({
  email,
  name,
  message,
}: IContactUs) {
  return await prisma?.contactUs.create({
    data: {
      email,
      name,
      message,
    },
  })
}
