import { type GetByRole, render, screen } from "@testing-library/react";
import AdminDashboardTabs from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs";

describe("Admin Dashboard", () => {
  it("Should be users tab", () => {
    render(<AdminDashboardTabs />); //ARRANGE

    //ACT
    const elem: HTMLDivElement = screen.getByText("Users");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).toBeInTheDocument(); //ASSERT
  });

  it("Should be users tab", () => {
    render(<AdminDashboardTabs />); //ARRANGE

    const elem: ReturnType<GetByRole> = screen.getByRole("button", {
      name: "Sign up",
    }); //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).toBeInTheDocument(); //ASSERT
  });

  it("should have the form on the Registration page", () => {
    render(<AdminDashboardTabs />); //ARRANGE

    const elem: ReturnType<GetByRole> = screen.getByRole("form", {
      name: "registration form",
    }); //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line
    expect(elem).toBeInTheDocument(); //ASSERT
  });
});
