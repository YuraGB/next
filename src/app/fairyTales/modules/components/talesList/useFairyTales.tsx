import { useEffect, useState } from 'react'
import { getAllFairyTales } from '@/app/fairyTales/service/getAllFairyTales'
import { Tale } from '.prisma/client'

export const useFairyTales = () => {
  const [tales, setTales] = useState<Tale[]>([])
  useEffect(() => {
    getAllFairyTales().then((resp) => {
      if (resp && resp.length) {
        setTales(resp)
      }
    })
  }, [])

  return { tales }
}
