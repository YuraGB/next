import React, { FC, memo, ReactNode, useEffect, useState } from 'react'
import { CommentWithUser } from '@/server/actions/types'
import Author from '@/modules/comments/components/Author/Author'
import RemoveButton from '@/components/removeButton'

type TProps = {
  comment: CommentWithUser | null
  onDelete: (id: string) => void
  isAdmin?: boolean
  status?: string
}
const CommentComponent: FC<TProps> = ({
  comment,
  status,
  isAdmin,
  onDelete,
}): ReactNode | null => {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!comment || !mounted) {
    return null
  }

  return (
    <section className={'relative'}>
      <div className={'inline-block w-full my-3 bg-white p-2'}>
        <Author author={comment.user} />
        <p className={'flex py-5 px-3 border-b-1'}>{comment.content}</p>
        <small className={'text-[12px] text-gray-600 flex justify-end p-2'}>
          {new Date(comment.createdAt).toLocaleDateString()}
        </small>
        {isAdmin ? (
          <div className={'absolute right-5 top-5'}>
            <RemoveButton onClick={() => onDelete(comment.id)} />
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default memo(CommentComponent)
