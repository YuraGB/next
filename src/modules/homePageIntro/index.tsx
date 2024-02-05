"use client";
import { memo, type ReactNode } from "react";
import { FormattedMessage } from "react-intl";

const HomePageIntro = (): ReactNode => {
  return (
    <section className={"max-w-[80%] text-center leading-8 [&>p]:mb-6"}>
      <h1>
        <strong className={"m-auto mb-6 block max-w-[70%] text-2xl"}>
          <FormattedMessage id={"intro.title"} />
        </strong>
      </h1>
      <em className={"mb-6 block"}>
        🌟{" "}
        <FormattedMessage
          id={"intro.subtitle"}
          defaultMessage={"Created with love by Yurii Huriyanov"}
        />{" "}
        🌟
      </em>
      <p>
        <FormattedMessage
          id={"intro.p1"}
          defaultMessage={
            "Dive into the enchanting realm of Fairy tale world, a passion project meticulously crafted by Yurii Huriyanov. This digital sanctuary is dedicated to weaving tales that captivate the imaginations of young minds and transport them to fantastical worlds filled with wonder and magic."
          }
        />
      </p>
      <p>
        <FormattedMessage
          id={"intro.p2"}
          defaultMessage={
            "At Fairy tale world, we believe in the power of storytelling to ignite\n        creativity, foster empathy, and instill timeless lessons. Our collection\n        of stories and fairy tales is thoughtfully curated to engage children of\n        all ages, offering a diverse range of adventures, characters, and life\n        lessons."
          }
        />
      </p>{" "}
      <p>
        <FormattedMessage
          id={"intro.p3"}
          defaultMessage={
            'As the architect of this whimsical haven, Yurii Hurianov has poured\\n        heart and soul into creating a space where storytelling isn&apos;t just\\n        an art but a journey. Each narrative is a carefully woven tapestry,\\n        inviting children to embark on thrilling adventures, meet extraordinary\\n        characters, and explore the boundless landscapes of their imagination.",\n'
          }
        />
      </p>
      <p>
        <FormattedMessage
          id={"intro.p4"}
          defaultMessage={
            "From classic fables to original tales penned by Yurii Hurianov, Fairy\n        tale world is a treasure trove of literary delights. Whether it&apos;s\n        bedtime stories that whisk little ones off to dreamland or educational\n        narratives that spark curiosity, our collection is designed to be a\n        source of joy, inspiration, and wholesome entertainment."
          }
        />
      </p>
      <p>
        <FormattedMessage
          id={"intro.p5"}
          defaultMessage={
            "Embark on a magical journey with us, and let the pages of Fairy tale\n        world unfold countless tales that will leave a lasting imprint on the\n        hearts of young readers. Join us in fostering a love for storytelling\n        and a lifelong appreciation for the beauty of imagination. Thank you for\n        being a part of our magical world. Happy reading!"
          }
        />
        <br />
        <FormattedMessage id={"intro.author"} defaultMessage={"Yurii Hurianov"} /> <br />
        <FormattedMessage id={"intro.creator"} defaultMessage={"Creator of Fairy tale world."} />
      </p>
    </section>
  );
};

export default memo(HomePageIntro);
