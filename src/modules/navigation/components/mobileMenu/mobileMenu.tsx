import React, { memo } from 'react'
import { NavBarItemType } from '@/modules/navigation/components/types'
import { NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar'
import Link from 'next/link'
import ProfileMenuItems from '@/modules/navigation/components/profileMenuItems/profileMenuItems'

type NavItemsProps = {
  items: NavBarItemType[]
}

const MobileMenu = ({ items }: NavItemsProps): React.ReactNode | null => {
  if (!items || !items.length) {
    return null
  }

  return (
    <NavbarMenu>
      {items.map((item) => (
        <NavbarMenuItem key={item.url}>
          <Link className="w-full" href={item.url}>
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}

      <ProfileMenuItems />
    </NavbarMenu>
  )
}

export default memo(MobileMenu)
