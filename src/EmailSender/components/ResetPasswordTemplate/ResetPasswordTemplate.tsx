import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";
import { type ReactNode } from "react";
import placeholder from "@/assets/placeholder.webp";
import { Body, Container, Head, Img, Row, Tailwind, Text } from "@react-email/components";

type ResetEmailProps = {
  receiver: string;
};

export function ResetEmail({ receiver }: ResetEmailProps): ReactNode {
  return (
    <Html lang="en">
      <Head />
      <Tailwind>
        <Body>
          <Container className={"p-6"}>
            <Row>
              <Img src={placeholder.src} alt="Book" width="300" height="300" />
              <Text>W.O.Fairy tales</Text>
            </Row>
            <Text className={"text-lg font-bold"}>Reset password</Text>
            <Text className={"text-sm font-bold"}>{receiver}</Text>
            <Text className={"text-sm font-bold"}>Please use this link to reset your password</Text>

            <Button
              href="https://example.com"
              className="rounded-md border-2 border-gray-800 bg-blue-400 px-3 py-2 font-mono leading-4 text-gray-800 underline"
            >
              Recovery link
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
