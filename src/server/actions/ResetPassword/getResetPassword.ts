"use server";
import prisma from "$prismaClient/prisma";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";

export type ResetPassDataError = {
  isError: boolean;
  message: string;
};

export type ResetPassData = {
  user: {
    id: string;
  };
};
export const getResetPassword = async (
  token: string
): Promise<ResetPassData | ResetPassDataError> => {
  let resetPasswordData;
  if (!token) {
    return {
      isError: true,
      message: "Token not found",
    };
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    resetPasswordData = await prisma?.resetPasswordRequest.findUnique({
      where: {
        token,
      },
      select: {
        user: true,
        expires: true,
      },
    });
  } catch (e) {
    return {
      isError: true,
      message: (e as Error).message,
    };
  }

  if (!resetPasswordData) {
    return {
      isError: true,
      message: "Token not found",
    };
  }

  if ("expires" in resetPasswordData && resetPasswordData.expires) {
    // If the token has expired
    if (resetPasswordData.expires < new Date()) {
      return {
        isError: true,
        message: "Token expired",
      }; // If the token has not expired
    } else if ("user" in resetPasswordData && resetPasswordData.user) {
      return {
        user: {
          id: (resetPasswordData.user as User).id,
        },
      };
    }
  }
  // Unknown error
  return {
    isError: true,
    message: "Something went wrong",
  };
};
