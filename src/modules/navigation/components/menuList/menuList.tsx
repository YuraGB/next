import { NavbarContent } from '@nextui-org/navbar'
import React, { memo } from 'react'
import { NavBarItemType } from '@/modules/navigation/components/types'
import MenuItem from '@/modules/navigation/components/menuItem/menuItem'

type NavItemsProps = {
  items: NavBarItemType[]
}

const MenuList = ({ items }: NavItemsProps): React.ReactNode | null => {
  if (!items || !items.length) {
    return null
  }

  return (
    <NavbarContent className="hidden sm:flex gap-4 mr-auto" justify="center">
      {items.map((item) => (
        <MenuItem key={item.url} item={item} />
      ))}
    </NavbarContent>
  )
}

export default memo(MenuList)
