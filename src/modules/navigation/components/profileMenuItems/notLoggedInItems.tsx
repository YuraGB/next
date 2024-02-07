import React, { memo } from "react";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Pages } from "@/utils/pages";
import { FormattedMessage } from "react-intl";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";

const NotLoggedInItems = (): React.ReactNode => {
  return (
    <NavbarContent justify="center" className={"ml-[auto] max-w-[140px]"}>
      <NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Button>
              <FormattedMessage id={"profile.button"} defaultMessage={"Profile"} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              key={Pages.SIGNUP}
              className={"rounded-none border-b-1 border-gray-200 py-3"}
            >
              <Link href={Pages.SIGNUP} className={"flex w-full "}>
                <FormattedMessage id={"sign_up_button"} />
              </Link>
            </DropdownItem>

            <DropdownItem key={Pages.LOGIN} className={"py-3"}>
              <Link href={Pages.LOGIN} className={"flex w-full"}>
                <FormattedMessage id={"login_button"} />
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    </NavbarContent>
  );
};

export default memo(NotLoggedInItems);
