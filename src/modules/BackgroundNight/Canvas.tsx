'use client'
import { useEffect } from 'react'
import start from '@/modules/BackgroundNight/util/canvasCalculations'
import { useBackgroundHook } from '@/modules/BacgroundHook/useBackgroundHook'

const BackgroundNight = () => {
  const handler = () => start('dark')
  const { ref } = useBackgroundHook(handler)

  useEffect(() => {
    window?.addEventListener('resize', handler)

    return () => {
      window?.removeEventListener('resize', handler)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transition: 'opacity 0.5s ease-in-out',
        opacity: 0,
      }}
    >
      <canvas
        className={
          'fixed top-0 bottom-0 left-0 right-0 bg-transparent w-full h-full'
        }
        id={'canvas'}
      ></canvas>
    </div>
  )
}

export default BackgroundNight
