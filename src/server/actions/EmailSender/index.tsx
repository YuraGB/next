"use server";
import React from "react";
import { ResetEmail } from "@/EmailSender/components/ResetPasswordTemplate/ResetPasswordTemplate";
import resend from "$prismaClient/resend";

export const emailSender = async (
  receiver: string,
  subject: string,
  react: string,
  baseUrl: string,
  resetLink: string
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
  let EmailComponent;
  switch (react) {
    case "ResetEmail":
      EmailComponent = <ResetEmail receiver={receiver} baseUrl={baseUrl} resetLink={resetLink} />;
      break;
    default:
      EmailComponent = null;
  }

  try {
    return await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RE_SEND_FROM_DOMAIN!,
      to: receiver,
      subject,
      text: subject,
      react: EmailComponent,
    });
  } catch (error) {
    console.error(error);

    return {
      isError: true,
      message: (error as Error).message,
    };
  }
};
