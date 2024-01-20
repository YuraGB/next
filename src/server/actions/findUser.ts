'use server'
import prisma from '$prismaClient/prisma'
import { User } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
import { z } from 'zod'

const FindUserSchema = z.string().email()

type TFindUser = z.infer<typeof FindUserSchema>
export const findUser = async (
  email: TFindUser
): Promise<User | null | undefined> => {
  if (!FindUserSchema.safeParse(email).success) {
    return null
  }

  if (prisma === null || prisma === undefined) {
    throw 'prisma absent'
  }

  try {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
