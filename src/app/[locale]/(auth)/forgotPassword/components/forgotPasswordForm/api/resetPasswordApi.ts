import { useMutation } from "@tanstack/react-query";
import { emailSender } from "@/server/actions/EmailSender";
import { findUser } from "@/server/actions/UserServises/findUser";
import { resetPassword } from "@/server/actions/ResetPassword/resetPassword";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useResetPassword = () => {
  return useMutation({
    mutationFn: async ({
      receiver,
      subject,
      react,
      baseUrl,
    }: {
      receiver: string;
      subject: string;
      react: string;
      baseUrl: string;
    }) => {
      let user;
      let token;
      try {
        //check for user
        user = await findUser(receiver);
      } catch (error) {
        console.error(error);
        return {
          isError: true,
          message: (error as Error).message,
        };
      }
      if (!user) {
        return {
          isError: true,
          message: "User not found",
        };
      }

      const userId = user.id;

      try {
        //create token
        token = await resetPassword(userId);
      } catch (error) {
        console.error(error);
        return {
          isError: true,
          message: (error as Error).message,
        };
      }

      if (!token) {
        return {
          isError: true,
          message: "Token not created",
        };
      }

      if ("isError" in token) {
        return {
          isError: true,
          message: token.message,
        };
      }

      const resetLink = `${baseUrl}/forgotPassword/${token.token}`;

      return emailSender(receiver, subject, react, baseUrl, resetLink);
    },
  });
};
