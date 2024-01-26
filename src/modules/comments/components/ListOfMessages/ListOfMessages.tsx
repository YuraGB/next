import { FC, memo } from 'react'
import { CommentWithUser } from '@/server/actions/types'
import CommentComponent from '@/modules/comments/components/Comment/Comment'

type TProps = {
  messages: CommentWithUser[] | undefined | null
}

const ListOfMessages: FC<TProps> = ({ messages }) => {
  if (!messages) {
    return null
  }

  return (
    <section>
      {messages.map((message) => (
        <CommentComponent key={message.id} comment={message} />
      ))}
    </section>
  )
}

export default memo(ListOfMessages)
