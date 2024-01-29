'use server'
import prisma from '$prismaClient/prisma'
import { z } from 'zod'
import { User } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
import { $Enums } from '.prisma/client'
import Role = $Enums.Role

const UserSchema = z.object({
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
})

export type TCreateUser = z.infer<typeof UserSchema>

export const createUser = async (
  user: TCreateUser
): Promise<Pick<User, 'email' | 'hashPassword'> | undefined> => {
  if (!UserSchema.safeParse(user).success) {
    throw 'Not all user data provided'
  }
  try {
    return await prisma.user.create(user)
  } catch (e) {
    console.log(e)
  }
}
