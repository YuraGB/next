import { FC, memo, ReactNode } from 'react'
import { CommentWithUser } from '@/server/actions/types'
import Author from '@/modules/comments/components/Author/Author'

type TProps = {
  comment: CommentWithUser | null
}
const CommentComponent: FC<TProps> = ({ comment }): ReactNode | null => {
  if (!comment) {
    return null
  }

  const {} = comment
  return (
    <section>
      <p>{comment.content}</p>
      <Author author={comment.user} />
    </section>
  )
}

export default memo(CommentComponent)
