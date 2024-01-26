import { Fragment, useMemo } from 'react'
import Paragraph from '@/app/[locale]/fairyTales/[id]/components/paragraph'
import { TaleWithRelations } from '@/server/actions/types'

export const useTaleContent = (taleData: Partial<TaleWithRelations>) => {
  const {
    content = '',
    forAge = '',
    mainImage = '',
    createdAt = new Date(),
    images = [],
    shortDescription = '',
    title = '',
  } = taleData

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
    content: normalizeContent,
  }
}
