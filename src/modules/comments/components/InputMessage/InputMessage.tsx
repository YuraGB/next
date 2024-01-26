import { FC, ReactNode } from 'react'
import { useInputComment } from '@/modules/comments/components/InputMessage/useInputComment'

type TProps = {
  isVisible: boolean
  setComment: () => void
}

const InputMessage: FC<TProps> = ({
  isVisible,
  setComment,
}): ReactNode | null => {
  console.log(setComment)
  const { handleSubmit, onSubmit, fields } = useInputComment()

  if (!isVisible) {
    return null
  }

  return (
    <form
      className={'bg-white p-4 mt-3 w-full max-w-xl flex flex-wrap'}
      aria-label={'registration form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields}

      <button type="submit">Send</button>
    </form>
  )
}

export default InputMessage
