import Link from 'next/link'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import MenuList from '@/modules/navigation/components/menuList/menuList'
import { useNavigation } from '@/modules/navigation/useNavigation'
import MobileMenu from '@/modules/navigation/components/mobileMenu/mobileMenu'
import ProfileMenuItems from '@/modules/navigation/components/profileMenuItems/profileMenuItems'

export const Navigation = (): React.ReactNode => {
  const menuItems = useNavigation()

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className=" pr-3" justify="center">
        <NavbarBrand>
          <Link
            href={'/'}
            className={'flex justify-center content-center items-center'}
          >
            <AcmeLogo />
            <p className="font-bold text-inherit">Yuhur</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <MenuList items={menuItems} />

      <ProfileMenuItems />

      <MobileMenu items={menuItems} />
    </Navbar>
  )
}

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)
