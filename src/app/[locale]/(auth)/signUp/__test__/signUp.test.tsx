import { render, screen, waitFor } from "@testing-library/react";
import RegisterPage from "@/app/[locale]/(auth)/signUp/page";
import ServerIntlProvider from "@/context/i18nProvider";
import { type ReactNode } from "react";
import { createIntl } from "@formatjs/intl";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import en from "../../../../../i18n/en.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {};
  },
}));

describe("Sign up page", () => {
  const intl = createIntl({
    locale: "en",
    messages: en,
    onError: (e) => {
      console.log(e);
    },
  });
  function Wrapper({ children }: { children: ReactNode }): ReactNode {
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <ServerIntlProvider locale={intl.locale} messages={intl.messages}>
          {children}
        </ServerIntlProvider>
      </QueryClientProvider>
    );
  }

  it("should have H1 Sign up", async () => {
    render(<RegisterPage />, {
      wrapper: Wrapper,
    }); //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole("heading", {
      name: "Registration",
    }); //ACT

    await waitFor(
      () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line
        expect(elem).toBeInTheDocument() //ASSERT
    );
  });

  it("should have submit button Sign up of the Registration form", () => {
    render(<RegisterPage />, { wrapper: Wrapper }); //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole("button", {
      name: "Sign up",
    }); //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).toBeInTheDocument(); //ASSERT
  });

  it("should have the form on the Registration page", () => {
    render(<RegisterPage />, { wrapper: Wrapper }); //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole("form", {
      name: "registration form",
    }); //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).toBeInTheDocument(); //ASSERT
  });
});
