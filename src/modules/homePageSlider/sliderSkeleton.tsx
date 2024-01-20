'use client'

import React, { FC, ReactNode } from 'react'
import { Skeleton } from '@nextui-org/skeleton'

export const SliderSkeleton: FC = (): ReactNode => {
  return (
    <div className={'flex justify-center items-center'}>
      <div className={''}>
        <Skeleton className="h-[260px] w-[200px] rounded-[50%]" />
      </div>
    </div>
  )
}
