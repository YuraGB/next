import React, { memo } from 'react'
import { NavbarContent, NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { Avatar } from '@nextui-org/avatar'

type Props = {
  user?: User
}

const LoggedInItems = ({ user }: Props): React.ReactNode => {
  if (!user) {
    return null
  }
  const { role, name } = user

  const isAdmin = role === 'admin'

  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Avatar name={name as string} size={'sm'} />
      </NavbarItem>
      {isAdmin ? (
        <NavbarItem className="hidden lg:flex">
          <Link href="/admin">Dashboard</Link>
        </NavbarItem>
      ) : null}
      <NavbarItem>
        <Button color="primary" onClick={() => signOut()} variant="flat">
          Sign Out
        </Button>
      </NavbarItem>
    </NavbarContent>
  )
}

export default memo(LoggedInItems)
