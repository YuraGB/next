import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React from 'react'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FieldValues } from 'react-hook-form/dist/types/fields'
import { useImagesInputs } from '@/app/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/imagesInputs/useImagesInputs'
import RemoveButton from '@/components/removeButton'

const ImagesInputs = ({
  register,
  initialImages,
}: {
  register: UseFormRegister<FieldValues>
  initialImages: string[] | undefined
}) => {
  const { onAdd, images, onDelete } = useImagesInputs(initialImages)

  const onDeleteHandler = (id: string) => () => onDelete(id)

  return (
    <section
      className={
        'rounded border-1 w-full flex flex-col justify-start items-center mb-5 p-5 max-h-[200px] overflow-auto'
      }
    >
      <Button
        variant={'flat'}
        color={'success'}
        onClick={onAdd}
        className={'mb-5 mt-1 h-3 p-5'}
      >
        Add new image
      </Button>
      {images.map((input, i) => (
        <div className={'flex w-full'} key={i}>
          <Input
            {...register(`images-${i}`, {})}
            name={`images-${i}`}
            description={`The url of the image`}
            defaultValue={input.defaultValue}
            className={'w-full mb-4 w-full'}
          />
          <RemoveButton onClick={onDeleteHandler(input.id)} />
        </div>
      ))}
    </section>
  )
}

export default React.memo(ImagesInputs)
