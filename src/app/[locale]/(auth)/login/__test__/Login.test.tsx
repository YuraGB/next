import { render, screen, waitFor } from "@testing-library/react";
import Login from "@/app/[locale]/(auth)/login/page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Login page", () => {
  it("Login H1 must be on the page", async () => {
    render(<Login />); //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole("heading", {
      name: "Login",
    }); //ACT

    await waitFor(
      () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line
        expect(elem).toBeInTheDocument() //ASSERT
    );
  });

  it("should have submit button Forgot password", async () => {
    render(<Login />); //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole("button", {
      name: "Login in",
    }); //ACT
    await waitFor(
      () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line
        expect(elem).toBeInTheDocument() //ASSERT
    );
  });

  it("should have the form on the Forgot password page", async () => {
    render(<Login />); //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole("form", {
      name: "Login in form",
    }); //ACT

    await waitFor(
      () =>
        // eslint-disable-next-line
        // @ts-expect-error
        // eslint-disable-next-line
        expect(elem).toBeInTheDocument() //ASSERT
    );
  });
});
