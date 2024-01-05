'use server'
import prisma from '$prismaClient/prisma'
import { Slider } from '@/modules/homePageSlider/types'
type GetPhotosT = () => Promise<Slider | null | undefined>

export const getPhotos: GetPhotosT = async () => {
  try {
    return await prisma?.slider.findFirst({
      where: {
        title: 'Home page slider',
      },
      select: {
        slide: {
          select: {
            id: true,
            title: true,
            image: true,
            url: true,
            description: true,
          },
        },
      },
    })
  } catch (e) {
    console.log(e)
  }
}
