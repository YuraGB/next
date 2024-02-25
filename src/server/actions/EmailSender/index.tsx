"use server";
import React from "react";
import { ResetEmail } from "@/EmailSender/components/ResetPasswordTemplate/ResetPasswordTemplate";
import resend from "$prismaClient/resend";

type TREsponce = {
  isError: boolean;
  message: string;
};

type TResendResponse = {
  data: {
    id: string;
  } | null;
  error: {
    message: string;
  } | null;
};

export const emailSender = async (
  receiver: string,
  subject: string,
  react: string,
  baseUrl: string,
  resetLink: string
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/require-await
): Promise<TResendResponse | TREsponce> => {
  let EmailComponent;
  switch (react) {
    case "ResetEmail":
      EmailComponent = <ResetEmail receiver={receiver} baseUrl={baseUrl} resetLink={resetLink} />;
      break;
    default:
      EmailComponent = null;
  }

  try {
    console.log("sending email", receiver, subject, react, baseUrl, resetLink);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment
    const response = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RE_SEND_FROM_DOMAIN!,
      to: receiver,
      subject,
      text: subject,
      react: EmailComponent,
    });

    return response as TResendResponse;
  } catch (error) {
    console.error(error);

    return {
      isError: true,
      message: (error as Error).message,
    };
  }
};
