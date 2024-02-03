'use client'
import { memo } from 'react'
import SocialLinks from '@/components/SocialLinks/SocialLinks'
import FooterNavigation from '@/modules/footer/components/FooterNavigation/FooterNavigation'
import ContactInfo from '@/components/ContactInfo/ContactInfo'
import Copyright from '@/modules/footer/components/Copyright/Copyright'

const Footer = () => {
  return (
    <footer
      className={
        'text-center rounded p-6 shadow-lg backdrop-blur mt-auto bg-gray-800 text-white'
      }
    >
      <article
        className={
          'grid sm:grid-cols-3 gap-1 sm:gap-3 items-start justify-items-center mb-[50px]'
        }
      >
        <SocialLinks />
        <FooterNavigation />
        <ContactInfo />
      </article>
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
