import { render, screen, waitFor } from "@testing-library/react";
import ForgotPassword from "@/app/[locale]/(auth)/forgotPassword/page";

describe("Forgot password page", () => {
  it("Forgot password H1 Forgot passwprd", async () => {
    render(<ForgotPassword />); //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole("heading", {
      name: "Forgot password ?",
    }); //ACT
    await waitFor(
      () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line
        expect(elem).toBeInTheDocument() //ASSERT
    );
  });
});
