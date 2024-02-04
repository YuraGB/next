import { Input } from '@nextui-org/input'
import { ChangeEvent, memo } from 'react'
import { SearchIcon } from '@nextui-org/shared-icons'

const InputSearch = ({
  onChange,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <Input
      type={'text'}
      size={'lg'}
      onInput={onChange}
      placeholder={'Start type'}
      aria-label={'Search input'}
      className={'w-full min-w-[200px]'}
      startContent={<SearchIcon />}
      maxLength={128}
    />
  )
}

export default memo(InputSearch)
