import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ["info", "query"],
  });
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

globalThis.prisma = prisma;
