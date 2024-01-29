import { Fragment, useMemo } from 'react'
import Paragraph from '@/app/[locale]/fairyTales/[id]/components/paragraph'
import { TaleWithRelations } from '@/server/actions/types'
import { useQuery } from '@tanstack/react-query'
import { getTale } from '@/server/actions/getTale'
import { GET_ONE_TALE } from '@/server/actions/queryNaming'

export const useTaleContent = (taleData: Partial<TaleWithRelations>) => {
  const { data } = useQuery({
    queryKey: [GET_ONE_TALE, taleData.id],
    queryFn: async () => await getTale(taleData.id ? taleData.id : ''),
    initialData: taleData,
    enabled: !!taleData.id,
  })

  const {
    content = '',
    forAge = '',
    mainImage = '',
    createdAt = new Date(),
    images = [],
    shortDescription = '',
    title = '',
    comments = [],
    rating = null,
  } = data || {}

  const normalizeContent = useMemo(() => {
    if (content) {
      return content
        .split(/\n/g)
        .filter((e) => e)
        .map((paragraph, i) => (
          <Fragment key={i + 'p'}>
            <Paragraph
              content={paragraph}
              image={images[i]}
              isOdd={i % 2 === 0}
            />
            <br />
          </Fragment>
        ))
    }
  }, [content, images])

  return {
    forAge,
    mainImage,
    createdAt,
    images,
    shortDescription,
    title,
    comments,
    content: normalizeContent,
    rating,
  }
}
