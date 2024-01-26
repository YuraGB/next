'use client'
import React, {
  FC,
  memo,
  ReactNode,
  Suspense,
  useEffect,
  useState,
} from 'react'

type TProps = {
  createdAt: Date | string
}

const CreatedAt: FC<TProps> = ({ createdAt }): ReactNode => {
  const [date, setMounted] = useState<string>('')

  useEffect(() => {
    setMounted(createdAt.toLocaleString())
  }, [createdAt])

  if (!date) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <p>Published: {String(date)}</p>
    </Suspense>
  )
}

export default memo(CreatedAt)
