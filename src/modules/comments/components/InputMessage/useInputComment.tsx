import { SubmitHandler, useForm } from 'react-hook-form'
import commentFields from './fields'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'
import { TCreateComment } from '@/server/actions/addComment'
import { useAddCommentService } from '@/modules/comments/components/service/addCommentService'
import { useEffect } from 'react'

type TSubmitData = {
  comment: string
  name: string
  email: string
}

export const useInputComment = (taleId: string | undefined) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<TSubmitData>>()

  const { mutate, error, status, data } = useAddCommentService(taleId || '')

  const fields = formFieldsMapping(commentFields, errors, register)

  useEffect(() => {
    if (status === 'success') {
      reset()
    }
  }, [reset, status])

  const onSubmit: SubmitHandler<Partial<TSubmitData>> = (data) => {
    const { comment, name, email } = data

    if (taleId && comment && name && email) {
      const commentData: TCreateComment = {
        comment,
        taleId,
        user: {
          name,
          email,
        },
      }
      mutate(commentData)
    }
  }

  return {
    fields,
    handleSubmit,
    isValid,
    onSubmit,
    error,
    status,
    data,
  }
}
