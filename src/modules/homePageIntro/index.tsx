import { memo } from 'react'

const HomePageIntro = () => {
  return (
    <section className={'text-center leading-8 max-w-[80%] [&>p]:mb-6'}>
      <h1>
        <strong className={'mb-6 text-2xl block max-w-[70%] m-auto'}>
          Welcome to Fairy tale world - A Magical World of Stories and Fairy
          Tales for Children
        </strong>
      </h1>
      <em className={'mb-6 block'}>
        🌟 Created with love by Yurii Huriyanov 🌟
      </em>
      <p>
        Dive into the enchanting realm of Fairy tale world, a passion project
        meticulously crafted by Yurii Huriyanov. This digital sanctuary is
        dedicated to weaving tales that captivate the imaginations of young
        minds and transport them to fantastical worlds filled with wonder and
        magic.
      </p>
      <p>
        At Fairy tale world, we believe in the power of storytelling to ignite
        creativity, foster empathy, and instill timeless lessons. Our collection
        of stories and fairy tales is thoughtfully curated to engage children of
        all ages, offering a diverse range of adventures, characters, and life
        lessons.
      </p>{' '}
      <p>
        As the architect of this whimsical haven, Yurii Hurianov has poured
        heart and soul into creating a space where storytelling isn&apos;t just
        an art but a journey. Each narrative is a carefully woven tapestry,
        inviting children to embark on thrilling adventures, meet extraordinary
        characters, and explore the boundless landscapes of their imagination.{' '}
      </p>
      <p>
        From classic fables to original tales penned by Yurii Hurianov, Fairy
        tale world is a treasure trove of literary delights. Whether it&apos;s
        bedtime stories that whisk little ones off to dreamland or educational
        narratives that spark curiosity, our collection is designed to be a
        source of joy, inspiration, and wholesome entertainment.
      </p>
      <p>
        Embark on a magical journey with us, and let the pages of Fairy tale
        world unfold countless tales that will leave a lasting imprint on the
        hearts of young readers. Join us in fostering a love for storytelling
        and a lifelong appreciation for the beauty of imagination. Thank you for
        being a part of our magical world. Happy reading! <br />
        Yurii Hurianov <br />
        Creator of Fairy tale world.
      </p>
    </section>
  )
}

export default memo(HomePageIntro)
