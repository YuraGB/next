import { render, screen } from "@testing-library/react";
import "jest-canvas-mock";
import UserItem from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/components/userItem/UserItem";

describe("User item Dashboard", () => {
  it("show null if there is no data ", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<UserItem user={null} />); //ARRANGE

    //ACT
    const elem: HTMLDivElement | null = screen.queryByText("user");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).not.toBeInTheDocument(); //ASSERT
  });

  it("Show the user", () => {
    const dummyUser = {
      name: "Name",
      description: "description",
      role: "USER",
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<UserItem user={dummyUser} />); //ARRANGE

    const elem: HTMLDivElement = screen.getByText("user");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).toBeInTheDocument(); //ASSERT
  });
});
