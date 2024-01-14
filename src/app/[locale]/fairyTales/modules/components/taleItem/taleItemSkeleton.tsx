import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/react'
import React from 'react'
import { Skeleton } from '@nextui-org/skeleton'

const TaleItemSkeleton = () => (
  <Card className="max-w-full w-full" isPressable isBlurred isHoverable>
    <CardHeader className="flex gap-3 relative p-0">
      <Skeleton className={'w-full h-[400px] object-cover'} />
    </CardHeader>
    <Divider />
    <CardFooter
      className={
        'absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 text-amber-50 flex justify-between'
      }
    ></CardFooter>
  </Card>
)

export default TaleItemSkeleton
