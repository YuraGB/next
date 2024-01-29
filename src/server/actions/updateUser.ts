import prisma from '$prismaClient/prisma'
import { User } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'

const updateUser = async (user: User) => {
  try {
    return await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: user.name,
        email: user.email,
        hashPassword: user.hashPassword,
      },
    })
  } catch (e) {
    console.log(e)
  }
}

export default updateUser
