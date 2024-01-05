'use client'
import React, { FC, memo } from 'react'
import { Tale } from '.prisma/client'
import TaleAdminItem from '@/app/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleItem/taleListItem'

const TalesList: FC<{ tales: Tale[]; onEdit: (tale: Tale) => void }> = ({
  tales,
  onEdit,
}) => {
  return (
    <section className={'grid justify-start gap-2'}>
      {tales.map((tale) => (
        <TaleAdminItem key={tale.id} tale={tale} onEdit={onEdit} />
      ))}
    </section>
  )
}

export default memo(TalesList)
