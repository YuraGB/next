import { memo, ReactNode } from 'react'
import Image from 'next/image'

const Paragraph = ({
  content,
  image,
  isOdd,
}: {
  content: string
  image: string | undefined
  isOdd: boolean
}): ReactNode => {
  return (
    <div
      className={
        'flex justify-between items-center relative min-h-[400px] my-3'
      }
    >
      <p
        className={`font-['cormorant_it'] italic text-xl max-w-full lg:max-w-[50%] [z-index:1] backdrop-blur p-6 text-amber-50 ${
          isOdd ? 'ml-auto' : 'mr-auto'
        }`}
      >
        {content}
      </p>
      {image ? (
        <Image
          src={image}
          fetchPriority={'low'}
          alt={'Yuhur photo'}
          width={900}
          height={300}
          loading={'lazy'}
          className="h-auto min-h-full w-full absolute object-cover max-w-full block box-border z-1"
        />
      ) : null}
    </div>
  )
}

export default memo(Paragraph)
