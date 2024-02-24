import { useMutation } from "@tanstack/react-query";
import { emailSender } from "@/server/actions/EmailSender";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useResetPassword = () => {
  return useMutation({
    mutationFn: ({
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
      return emailSender(receiver, subject, react, baseUrl);
    },
  });
};
