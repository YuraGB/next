import React, { FC } from 'react'
import TalesList from '@/app/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleList/talesList'
import { Tale } from '.prisma/client'
import TaleModal from '@/app/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/taleModal'
import { useDisclosure } from '@nextui-org/use-disclosure'
import { Button } from '@nextui-org/button'

const AdminTalesTab: FC<{ tales: Tale[] }> = ({ tales }) => {
  const dialogProps = useDisclosure()
  return (
    <article className={'w-full'}>
      <div className={'p-6 text-center'}>
        <Button onClick={dialogProps.onOpen}>Create a tale</Button>
      </div>

      <TalesList tales={tales} />
      <TaleModal {...dialogProps} />
    </article>
  )
}

export default React.memo(AdminTalesTab)
