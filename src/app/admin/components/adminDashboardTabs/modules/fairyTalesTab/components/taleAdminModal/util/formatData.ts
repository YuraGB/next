import { Tale } from '.prisma/client'

export const formatTaleData = (data: Partial<Tale>): Partial<Tale> => {
  const formattedData: Partial<Tale> = {
    images: [] as string[], // Initialize images as an array
  }

  for (const [key, value] of Object.entries(data)) {
    if (key.includes('images')) {
      if (typeof value === 'string') {
        formattedData.images?.push(value as string)
      }
    } else {
      // never as a temporary solution
      formattedData[key as keyof typeof data] = value as never // Type assertion here
    }
  }

  return formattedData
}
