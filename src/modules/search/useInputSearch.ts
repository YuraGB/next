import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import useDebounce from '@/modules/search/useDebounce'
import { useQuery } from '@tanstack/react-query'
import getSearch from '@/actions/searchTale'
import { useRouter } from 'next/navigation'
import { Pages } from '@/utils/pages'

export const useInputSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isPopoverOpen, setIsOpen] = useState<boolean>(false)

  const router = useRouter()

  const redirectToTale = useCallback(
    (id: string) => {
      if (id) {
        setIsOpen(false)
        router.push(`${Pages.FAIRY_TALES}/${id}`, { scroll: true })
      }
    },
    [router]
  )

  const value = useDebounce(searchValue)

  const { data, isLoading, error } = useQuery({
    queryKey: ['searchTale', value],
    queryFn: () => {
      return getSearch(value)
    },
    enabled: !!value,
  })

  const searchResults = useMemo(() => {
    if (data && data.length) {
      return data
    }
    return []
  }, [data])

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event?.target?.value) {
        setSearchValue(event.target.value)
      }
    },
    []
  )

  return {
    onChangeHandler,
    searchResults,
    isLoading,
    error,
    redirectToTale,
    isPopoverOpen,
    setIsOpen,
  }
}
