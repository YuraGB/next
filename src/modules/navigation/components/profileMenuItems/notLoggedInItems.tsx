import React, { memo } from 'react'
import { NavbarContent, NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { Pages } from '@/utils/pages'

const NotLoggedInItems = (): React.ReactNode => {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Link href={Pages.LOGIN}>Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href={Pages.SIGNUP} variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  )
}

export default memo(NotLoggedInItems)
