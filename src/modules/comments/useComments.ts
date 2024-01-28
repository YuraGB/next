import { useDeleteCommentService } from '@/modules/comments/components/service/useDeleteCommentService'
import { useSession } from 'next-auth/react'

export const useComments = (taleId: string) => {
  const { data: sessionData } = useSession()
  const { mutate, status, error, data } = useDeleteCommentService(taleId)

  const isAdmin = sessionData?.user?.role === 'ADMIN'
  const onDelete = (id: string) => {
    if (isAdmin && id) {
      mutate(id)
    }
  }

  return {
    isAdmin,
    onDelete,
    status,
    error,
    data,
  }
}
