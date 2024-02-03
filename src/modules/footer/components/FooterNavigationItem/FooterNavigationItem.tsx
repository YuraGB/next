import { NavigationItem } from '@/modules/navigation/useNavigation'
import Link from 'next/link'

type FooterNavigationItemProps = {
  navigationItem: NavigationItem
}

const FooterNavigationItem = ({
  navigationItem,
}: FooterNavigationItemProps) => {
  return (
    <Link href={navigationItem.url} className="footer-navigation-item">
      {navigationItem.name}
    </Link>
  )
}

export default FooterNavigationItem
