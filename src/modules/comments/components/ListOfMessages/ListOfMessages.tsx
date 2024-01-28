import { FC, memo } from 'react'
import { CommentWithUser } from '@/server/actions/types'
import CommentComponent from '@/modules/comments/components/Comment/Comment'

type TProps = {
  messages: CommentWithUser[] | undefined | null
  onDelete: (id: string) => void
  isAdmin?: boolean
  status?: string
}

const ListOfMessages: FC<TProps> = ({
  messages,
  status,
  isAdmin,
  onDelete,
}) => {
  if (!messages) {
    return null
  }

  return (
    <section className={'flex flex-col'}>
      {messages.map((message) => (
        <CommentComponent
          key={message.id}
          comment={message}
          isAdmin={isAdmin}
          status={status}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}

export default memo(ListOfMessages)
