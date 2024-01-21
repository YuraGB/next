'use client'
import Link from 'next/link'
import React, { Suspense, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import MenuList from '@/modules/navigation/components/menuList/menuList'
import { useNavigation } from '@/modules/navigation/useNavigation'

import { FormattedMessage } from 'react-intl'

import Search from '@/modules/search'
import ThemeSwitcher from '@/components/themeSwitcher/ThemeSwitcher'
import LangSwitcher from '@/modules/langSwitcher/langSwitcher'
import dynamic from 'next/dynamic'

const MobileMenu = dynamic(
  () => import('@/modules/navigation/components/mobileMenu/mobileMenu')
)
const ProfileMenuItems = dynamic(
  () =>
    import('@/modules/navigation/components/profileMenuItems/profileMenuItems')
)

const Navigation = (): React.ReactNode => {
  const menuItems = useNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      disableAnimation
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={'[&>header]:px-1'}
    >
      <NavbarContent
        className="pr-3 max-w-[50%] sm:max-w-[fit-content]"
        justify="start"
      >
        <li className={'flex w-full'}>
          <ThemeSwitcher />
          <LangSwitcher />
          <NavbarBrand
            className={'justify-end mr-[-18px] sm:mr-0  hidden sm:flex'}
          >
            <Link
              href={'/'}
              className={'flex justify-center content-center items-center'}
            >
              <p className="font-bold text-inherit hidden sm:flex items-center">
                <AcmeLogo />
                <FormattedMessage id={'logo'} />
              </p>
            </Link>
          </NavbarBrand>
        </li>
      </NavbarContent>

      <MenuList items={menuItems} />

      <Suspense fallback={null}>
        <ProfileMenuItems />
      </Suspense>

      <Suspense fallback={null}>
        <MobileMenu items={menuItems} />
      </Suspense>

      <NavbarContent className={'max-w-[fit-content]'}>
        <NavbarContent className={'max-w-[40px]'}>
          <Search />
        </NavbarContent>

        <NavbarContent className="md:hidden max-w-[25px]" justify="start">
          <li>
            <NavbarMenuToggle className={'h-5'} />
          </li>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  )
}

export default React.memo(Navigation)

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
