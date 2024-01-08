import React from 'react'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/react'
import { Skeleton } from '@nextui-org/skeleton'

const TaleListSkeleton = (): React.ReactNode => {
  return (
    <Card className="w-full" isPressable isBlurred isHoverable>
      <Skeleton className={'w-full min-h-[380px]'}>
        <CardHeader className="flex gap-3 relative p-0">
          <div className="flex flex-col">
            <p className="p-2" />
          </div>
        </CardHeader>
      </Skeleton>
      <Divider />
      <CardFooter className={'flex justify-between'}>
        <Skeleton className={'p-2 w-[20%] rounded'}>
          <p className={'p-2 w-[20%]'} />
        </Skeleton>

        <Skeleton className={'p-2 w-[10%] rounded'}>
          <p className={'p-2 w-[20%]'} />
        </Skeleton>
      </CardFooter>
    </Card>
  )
}

export default React.memo(TaleListSkeleton)
