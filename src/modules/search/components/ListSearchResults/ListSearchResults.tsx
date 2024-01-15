import { Tale } from '.prisma/client'
import { FC, memo, ReactNode } from 'react'
import ResultItem from '@/modules/search/components/ResultItem/ResultItem'
import { CategoryTale } from '@prisma/client'

export type TaleWithCategory = Partial<Tale> & { categoryTale: CategoryTale }

type ListResultsT = {
  results: TaleWithCategory[]
  onClick: (id: string) => void
}

const ListSearchResults: FC<ListResultsT> = ({
  results,
  onClick,
}): ReactNode | null => {
  if (!results?.length) {
    return null
  }
  return (
    <section>
      {results.map((tale) => (
        <ResultItem key={tale.id} tale={tale} onClick={onClick} />
      ))}
    </section>
  )
}

export default memo(ListSearchResults)
