import { NavbarContent, NavbarItem } from '@nextui-org/navbar'
import React from 'react'
import { Skeleton } from '@nextui-org/skeleton'

export const SkeletonComponent = () => {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Skeleton className={'flex rounded-full w-12 h-12'} />
      </NavbarItem>
    </NavbarContent>
  )
}
