import React, { memo, useMemo } from 'react'
import { NavbarContent } from '@nextui-org/navbar'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { Avatar } from '@nextui-org/avatar'
import { Pages } from '@/utils/pages'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown'

type Props = {
  user?: User
}

const LoggedInItems = ({ user }: Props): React.ReactNode => {
  const isAdmin = useMemo(() => user?.role === 'ADMIN', [user?.role])
  if (!user) {
    return null
  }

  const { name } = user

  return (
    <NavbarContent justify="end" className={'max-w-[40px] ml-[auto]'}>
      <Dropdown>
        <DropdownTrigger>
          <Avatar name={name as string} size={'sm'} />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key={Pages.ADMIN}>
            {isAdmin ? <Link href={Pages.ADMIN}>Dashboard</Link> : null}
          </DropdownItem>
          <DropdownItem key="new">
            <Button color="primary" onClick={() => signOut()} variant="flat">
              Sign Out
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  )
}

export default memo(LoggedInItems)
