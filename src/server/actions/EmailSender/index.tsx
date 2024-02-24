"use server";
import React from "react";
import { ResetEmail } from "@/EmailSender/components/ResetPasswordTemplate/ResetPasswordTemplate";
import resend from "$prismaClient/resend";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const emailSender = async (
  receiver: string,
  subject: string,
  react: string,
  baseUrl: string
) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  let EmailComponent;
  switch (react) {
    case "ResetEmail":
      EmailComponent = <ResetEmail receiver={receiver} baseUrl={baseUrl} />;
      break;
    default:
      EmailComponent = null;
  }

  await resend.emails.send({
    from: process.env.NEXT_PUBLIC_RE_SEND_FROM_DOMAIN!,
    to: receiver,
    subject,
    text: subject,
    react: EmailComponent,
  });
};
