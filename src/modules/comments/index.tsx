import InputMessage from '@/modules/comments/components/InputMessage/InputMessage'
import ListOfMessages from '@/modules/comments/components/ListOfMessages/ListOfMessages'
import { CommentWithUser } from '@/server/actions/types'
import { FC, ReactNode } from 'react'

type TProps = {
  messages: CommentWithUser[] | undefined
  shouldAddComment?: boolean
}

const Comments: FC<TProps> = ({
  messages,
  shouldAddComment = false,
}): ReactNode | null => {
  if (!messages || (messages.length === 0 && !shouldAddComment)) {
    return null
  }

  return (
    <article>
      <InputMessage isVisible={shouldAddComment} setComment={() => {}} />
      <ListOfMessages messages={messages} />
    </article>
  )
}

export default Comments
