'use client'
import { useEffect } from 'react'
import start from '@/modules/BackgroundNight/util/canvasCalculations'

const BackgroundNight = () => {
  const handler = () => start('dark')

  useEffect(() => {
    start('dark')

    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
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
