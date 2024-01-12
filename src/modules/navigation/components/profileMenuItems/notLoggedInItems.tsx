import React, { memo } from 'react'
import { NavbarContent, NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { Pages } from '@/utils/pages'
import { FormattedMessage } from 'react-intl'

const NotLoggedInItems = (): React.ReactNode => {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Link href={Pages.LOGIN}>
          <FormattedMessage id={'login_button'} />
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href={Pages.SIGNUP} variant="flat">
          <FormattedMessage id={'sign_up_button'} />
        </Button>
      </NavbarItem>
    </NavbarContent>
  )
}

export default memo(NotLoggedInItems)
