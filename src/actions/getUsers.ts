'use server'
import prisma from '$prismaClient/prisma'
import { User } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
type GetUsersT = () => Promise<User[] | null | undefined>

export const getUsers: GetUsersT = async () => {
  try {
    return await prisma?.user.findMany()
  } catch (e) {
    console.log(e)
  }
}
