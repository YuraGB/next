'use client'
import React from 'react'
import { useLangSwitcher } from '@/modules/langSwitcher/useLangSwitcher'
import { Select, SelectItem } from '@nextui-org/select'

const LangSwitcher = () => {
  const { handleChange, currentLocale } = useLangSwitcher()

  return (
    <Select
      onChange={handleChange}
      defaultSelectedKeys={[currentLocale as string]}
      aria-label={'language switcher'}
      className={'w-[70px]'}
      size={'sm'}
    >
      <SelectItem key={'uk'} value={'uk'} className={'w-[55px]'}>
        ua
      </SelectItem>
      <SelectItem key={'en'} value={'en'} className={'w-[55px]'}>
        en
      </SelectItem>
    </Select>
  )
}

export default React.memo(LangSwitcher)
