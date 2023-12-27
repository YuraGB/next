import { Inputs } from '@/modules/types/formTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (data: Partial<Inputs>) =>
  Object.values(data).every((field) => field)
