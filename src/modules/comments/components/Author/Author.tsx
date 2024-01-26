import { FC, memo, ReactNode } from 'react'
import { User } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'

type TProps = {
  author: User | null
}

const Author: FC<TProps> = ({ author }): ReactNode | null => {
  if (!author) {
    return null
  }

  const { name } = author

  return (
    <section>
      <h3>{name}</h3>
    </section>
  )
}

export default memo(Author)
