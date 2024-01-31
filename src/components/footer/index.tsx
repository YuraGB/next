'use client'
import { memo } from 'react'

const Footer = () => {
  return (
    <footer
      className={
        'text-center rounded p-6 shadow-lg backdrop-blur mt-auto bg-gray-800 text-white'
      }
    >
      <p>© 2024 Yurii H.</p>
    </footer>
  )
}

export default memo(Footer)
