import React from 'react'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/react'
import { Tale } from '.prisma/client'

const TaleAdminItem = ({
  tale,
  onEdit,
}: {
  tale: Tale
  onEdit: (tale: Tale) => void
}): React.ReactNode | null => {
  if (!tale) {
    return null
  }

  const { id, title, forAge, createdAt } = tale

  const onClick = () => {
    if (id) {
      onEdit(tale)
    }
  }

  return (
    <Card
      className="min-w-[400px]"
      isPressable
      isBlurred
      isHoverable
      onClick={onClick}
    >
      <CardHeader className="flex gap-3 relative p-0">
        <div className="flex flex-col">
          <p className="p-2">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter>
        <p className={'mr-2'}>Category: {forAge}</p>
        <p>Published: {createdAt.toLocaleDateString()}</p>
      </CardFooter>
    </Card>
  )
}

export default React.memo(TaleAdminItem)
