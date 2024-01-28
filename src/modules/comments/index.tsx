import InputMessage from '@/modules/comments/components/InputMessage/InputMessage'
import ListOfMessages from '@/modules/comments/components/ListOfMessages/ListOfMessages'
import { CommentWithUser } from '@/server/actions/types'
import { FC, ReactNode } from 'react'
import { useComments } from '@/modules/comments/useComments'

type TProps = {
  messages: CommentWithUser[] | undefined
  shouldAddComment?: boolean
  taleId?: string
}

const Comments: FC<TProps> = ({
  messages,
  shouldAddComment = false,
  taleId,
}): ReactNode | null => {
  const { onDelete, isAdmin, status } = useComments(taleId || '')
  if (!messages || (messages.length === 0 && !shouldAddComment)) {
    return null
  }

  return (
    <section>
      <InputMessage isVisible={shouldAddComment} taleId={taleId} />
      <ListOfMessages
        messages={messages}
        onDelete={onDelete}
        isAdmin={isAdmin}
        status={status}
      />
    </section>
  )
}

export default Comments
