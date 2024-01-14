import { Input } from '@nextui-org/input'
import { memo } from 'react'
import { SearchIcon } from '@nextui-org/shared-icons'

const InputSearch = () => {
  return (
    <Input
      type={'text'}
      size={'lg'}
      placeholder={'Start type'}
      aria-label={'Search input'}
      className={'w-full min-w-[200px]'}
      startContent={<SearchIcon />}
    />
  )
}

export default memo(InputSearch)
