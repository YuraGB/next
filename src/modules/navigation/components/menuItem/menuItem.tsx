import Link from 'next/link'
import { NavbarItem } from '@nextui-org/navbar'
import React, { memo } from 'react'
import { NavBarItemType } from '@/modules/navigation/components/types'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  item: NavBarItemType
}

const MenuItem = ({ item }: NavItemProps): React.ReactNode | null => {
  const pathname = usePathname()

  if (!item) {
    return null
  }

  const { url, name } = item

  return (
    <NavbarItem isActive={pathname === url}>
      <Link color="foreground" href={url}>
        {name}
      </Link>
    </NavbarItem>
  )
}

export default memo(MenuItem)
