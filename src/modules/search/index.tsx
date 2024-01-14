import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react'
import { memo } from 'react'
import { SearchIcon } from '@nextui-org/shared-icons'
import InputSearch from '@/modules/search/components/InputSearch/InputSearch'

const Search = () => {
  return (
    <section>
      <Popover
        showArrow
        backdrop="opaque"
        placement="bottom-end"
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
          <Button isIconOnly={true}>
            <SearchIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <InputSearch />
          <p>Content</p>
        </PopoverContent>
      </Popover>
    </section>
  )
}

export default memo(Search)
