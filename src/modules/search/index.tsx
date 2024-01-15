import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react'
import { memo, SyntheticEvent } from 'react'
import { SearchIcon } from '@nextui-org/shared-icons'
import InputSearch from '@/modules/search/components/InputSearch/InputSearch'
import { useInputSearch } from '@/modules/search/useInputSearch'
import SearchResults from '@/modules/search/components/SearchResults/SearchResults'

const Search = () => {
  const {
    searchResults,
    error,
    isLoading,
    onChangeHandler,
    redirectToTale,
    isPopoverOpen,
    setIsOpen,
  } = useInputSearch()

  const onClose = (e: SyntheticEvent<HTMLElement>) => {
    const isClickOnContent = (e.target as HTMLElement)?.closest(
      '[data-slot="content"]'
    )
    if (!isClickOnContent) {
      setIsOpen(false)
    }
  }

  return (
    <section>
      <Popover
        showArrow
        backdrop="opaque"
        onClick={onClose}
        placement="bottom-end"
        shouldCloseOnBlur={true}
        isOpen={isPopoverOpen}
        classNames={{
          base: [
            // arrow color
            'before:bg-default-200',
            'w-[500px] max-w-full rounded-0',
          ],
          content: [
            'py-3 px-4 border border-default-200',
            'bg-gradient-to-br from-white to-default-300',
            'dark:from-default-100 dark:to-default-50',
            'rounded-0',
          ],
        }}
      >
        <PopoverTrigger>
          <Button isIconOnly={true} onClick={() => setIsOpen((st) => !st)}>
            <SearchIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <InputSearch onChange={onChangeHandler} />
          <SearchResults
            searchResults={searchResults}
            error={error}
            onClick={redirectToTale}
            isLoading={isLoading}
          />
        </PopoverContent>
      </Popover>
    </section>
  )
}

export default memo(Search)
