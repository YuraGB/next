import { useForm } from 'react-hook-form'
import commentFields from './fields'
import formFieldsMapping from '@/modules/utils/formFieldsMapping'

export const useInputComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm()

  const fields = formFieldsMapping(commentFields, errors, register)

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return {
    fields,
    handleSubmit,
    isValid,
    onSubmit,
  }
}
