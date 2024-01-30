'use client'
import { useEffect } from 'react'
import start from '@/modules/BackgroundNight/util/canvasCalculations'

const BackgroundNight = () => {
  useEffect(() => {
    start('dark')

    window.addEventListener('resize', () => start('dark'))

    return () => {
      window.removeEventListener('resize', () => start('dark'))
    }
  }, [])
  return (
    <canvas
      className={
        'fixed top-0 bottom-0 left-0 right-0 bg-transparent w-full h-full'
      }
      id={'canvas'}
    ></canvas>
  )
}

export default BackgroundNight
