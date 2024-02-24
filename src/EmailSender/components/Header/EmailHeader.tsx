import { Container, Row, Text } from "@react-email/components";
import { type ReactNode } from "react";

export const EmailHeader = (): ReactNode => {
  return (
    <Container className={"items-center p-6 text-center align-middle"}>
      <Row>
        <Text>W.O.Fairy tales</Text>
      </Row>
    </Container>
  );
};

export default EmailHeader;
