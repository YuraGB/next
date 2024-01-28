import { FC, memo, ReactNode } from 'react'
import { User } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
import { Avatar } from '@nextui-org/avatar'
import { AvatarIcon } from '@nextui-org/react'

type TProps = {
  author: User | null
}

const Author: FC<TProps> = ({ author }): ReactNode | null => {
  if (!author) {
    return null
  }

  const { name } = author

  return (
    <div className={'flex items-center'}>
      <Avatar
        icon={<AvatarIcon />}
        classNames={{
          icon: 'text-black/80',
        }}
      />
      <h3 className={'ml-2'}>{name}</h3>
    </div>
  )
}

export default memo(Author)
