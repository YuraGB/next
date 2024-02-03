'use client'
import { FormattedMessage } from 'react-intl'
import { memo } from 'react'
import { useNavigation } from '@/modules/navigation/useNavigation'
import FooterNavigationList from '@/modules/footer/components/FooterNavigationList/FooterNavigationList'

const FooterNavigation = () => {
  const menuItems = useNavigation()

  return (
    <nav>
      <h2 className={'text-xl mb-2'}>
        <FormattedMessage
          id={'footer.navigation.title'}
          defaultMessage={'Footer navigation'}
        />{' '}
      </h2>
      <FooterNavigationList navigationList={menuItems} />
    </nav>
  )
}

export default memo(FooterNavigation)
