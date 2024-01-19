'use client'

import React, { FC, ReactNode } from 'react'
import { Skeleton } from '@nextui-org/skeleton'

export const SliderSkeleton: FC = (): ReactNode => {
  return (
    <div style={{ position: 'relative', width: '256px', height: '341' }}>
      <div className={'[clip-path:ellipse(209px_205px_at_10%_20%)]'}>
        <Skeleton className="h-[300px] w-[341px] " />
      </div>
    </div>
  )
}
