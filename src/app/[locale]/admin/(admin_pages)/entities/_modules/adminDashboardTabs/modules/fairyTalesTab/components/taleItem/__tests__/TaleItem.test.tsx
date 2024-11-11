import { render, screen } from "@testing-library/react";
import TaleAdminItem from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/fairyTalesTab/components/taleItem/taleListItem";
import { createIntl } from "@formatjs/intl";
import en from "@/i18n/en.json";
import type { ReactNode } from "react";
import ServerIntlProvider from "@/context/i18nProvider";

describe("Tale item Dashboard", () => {
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

  it("show null if there is no data ", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<TaleAdminItem tale={null} onEdit={() => undefined} />, {
      wrapper: Wrapper,
    }); //ARRANGE

    //ACT
    const elem: HTMLDivElement | null = screen.queryByText("Category: ");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).not.toBeInTheDocument(); //ASSERT
  });

  it("Show the tale item", () => {
    const dummyTaleItem = {
      id: "1",
      title: "title",
      forAge: "1-3",
      createdAt: new Date(),
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<TaleAdminItem tale={dummyTaleItem} onEdit={() => undefined} />, {
      wrapper: Wrapper,
    }); //ARRANGE

    const elem: HTMLDivElement | null = screen.queryByText("Category: 1-3");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).toBeInTheDocument(); //ASSERT
  });
});
