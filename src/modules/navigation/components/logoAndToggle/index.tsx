import Link from 'next/link'
import {
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import React, { memo } from 'react'
import { AcmeLogo } from '@/modules/navigation/Navigation'

const LogoAndToggle = (): React.ReactNode => {
  return (
    <>
      <NavbarContent className="sm:hidden" justify="start">
        <li>
          <NavbarMenuToggle />
        </li>
      </NavbarContent>

      <NavbarContent className=" pr-3" justify="center">
        <li>
          <NavbarBrand>
            <Link
              href={'/'}
              className={'flex justify-center content-center items-center'}
            >
              <AcmeLogo />
              <p className="font-bold text-inherit">Yuhur</p>
            </Link>
          </NavbarBrand>
        </li>
      </NavbarContent>
    </>
  )
}

export default memo(LogoAndToggle)
