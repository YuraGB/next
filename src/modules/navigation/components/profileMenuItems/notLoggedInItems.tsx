import React, { memo } from 'react'
import { NavbarContent, NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { Pages } from '@/utils/pages'
import { FormattedMessage } from 'react-intl'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown'

const NotLoggedInItems = (): React.ReactNode => {
  return (
    <NavbarContent justify="end" className={'max-w-[40px] ml-[auto]'}>
      <NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Button>
              <FormattedMessage
                id={'profile.button'}
                defaultMessage={'Profile'}
              />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key={Pages.SIGNUP}>
              <Link href={Pages.SIGNUP} className={'w-full flex'}>
                <FormattedMessage id={'sign_up_button'} />
              </Link>
            </DropdownItem>

            <DropdownItem key={Pages.LOGIN}>
              <Link href={Pages.LOGIN} className={'w-full flex'}>
                <FormattedMessage id={'login_button'} />
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    </NavbarContent>
  )
}

export default memo(NotLoggedInItems)
