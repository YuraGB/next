import { Select, SelectItem } from '@nextui-org/select'
import { CategoryTale } from '@prisma/client'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FieldValues } from 'react-hook-form/dist/types/fields'
import { FC, memo } from 'react'
import { useCategoryList } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/categorySelect/useCategoryList'

type Props = {
  register: UseFormRegister<FieldValues>
}

const CategorySelect: FC<Props> = ({ register }) => {
  const { categoryList } = useCategoryList()

  if (!categoryList || categoryList.length === 0) {
    return null
  }

  return (
    <Select
      label="Select an animal"
      className="max-w-xs mb-6"
      {...register('categoryTaleId', {})}
      name={'categoryTaleId'}
    >
      {categoryList.map((category) => (
        <SelectItem key={category.id} value={category.id}>
          {category.name}
        </SelectItem>
      ))}
    </Select>
  )
}

export default memo(CategorySelect)
