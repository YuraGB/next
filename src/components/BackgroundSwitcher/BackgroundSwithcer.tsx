'use client'
import { useTheme } from 'next-themes'
import BackgroundNight from '@/modules/BackgroundNight/Canvas'
import BackgroundDay from '@/modules/BackgroundDay'

const BackgroundSwithcer = () => {
  const { theme } = useTheme()

  return theme === 'dark' ? <BackgroundNight /> : <BackgroundDay />
}

export default BackgroundSwithcer
