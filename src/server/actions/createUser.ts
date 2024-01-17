'use server'
import prisma from '$prismaClient/prisma'
import { User } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'

export type TCreateUser = {
  data: {
    name: string
    email: string
    hashPassword: string
  }
  select: {
    email: boolean
    hashPassword: boolean
  }
}

export const createUser = async (
  user: TCreateUser
): Promise<Promise<Pick<User, 'email' | 'hashPassword'>> | undefined> => {
  try {
    return await prisma.user.create(user)
  } catch (e) {
    console.log(e)
  }
}
