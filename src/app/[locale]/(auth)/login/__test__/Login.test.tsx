import { type GetByRole, render, screen, waitFor } from "@testing-library/react";
import Login from "@/app/[locale]/(auth)/login/page";
import { createIntl } from "@formatjs/intl";
import en from "@/i18n/en.json";
import type { ReactNode } from "react";
import ServerIntlProvider from "@/context/i18nProvider";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Login page", () => {
  const intl = createIntl({
    locale: "en",
    messages: en,
    onError: (e) => {
      console.log(e);
    },
  });
  function Wrapper({ children }: { children: ReactNode }): ReactNode {
    return (
      <ServerIntlProvider locale={intl.locale} messages={intl.messages}>
        {children}
      </ServerIntlProvider>
    );
  }

  it("Login H1 must be on the page", async () => {
    render(<Login />, {
      wrapper: Wrapper,
    }); //ARRANGE

    const elem: ReturnType<GetByRole<HTMLElement>> = screen.getByRole("heading", {
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
    render(<Login />, {
      wrapper: Wrapper,
    }); //ARRANGE

    const elem: ReturnType<GetByRole<HTMLElement>> = screen.getByRole("button", {
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
    render(<Login />, {
      wrapper: Wrapper,
    }); //ARRANGE

    const elem: ReturnType<GetByRole<HTMLElement>> = screen.getByRole("form", {
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
