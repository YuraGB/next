import React, { memo } from 'react'
import { NavbarContent, NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { Button } from '@nextui-org/button'

const NotLoggedInItems = (): React.ReactNode => {
  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="/login">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="/signUp" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  )
}

export default memo(NotLoggedInItems)
