import Link from 'next/link'
import { NavbarItem } from '@nextui-org/navbar'
import React, { memo } from 'react'
import { NavBarItemType } from '@/modules/navigation/components/types'

type NavItemProps = {
  item: NavBarItemType
}

const MenuItem = ({ item }: NavItemProps): React.ReactNode | null => {
  if (!item) {
    return null
  }

  const { url, name } = item

  return (
    <NavbarItem>
      <Link color="foreground" href={url}>
        {name}
      </Link>
    </NavbarItem>
  )
}

export default memo(MenuItem)
