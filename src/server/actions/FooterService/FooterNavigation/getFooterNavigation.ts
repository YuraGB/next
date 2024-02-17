import prisma from "$prismaClient/prisma";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getFooterNavigation = () => {
  return prisma?.footerNavigation.findFirst({
    include: {
      navLinks: true,
    },
  });
};
