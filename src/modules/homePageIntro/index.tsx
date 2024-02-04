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
        🌟 <FormattedMessage id={"intro.subtitle"} /> 🌟
      </em>
      <p>
        <FormattedMessage id={"intro.p1"} />
      </p>
      <p>
        <FormattedMessage id={"intro.p2"} />
      </p>{" "}
      <p>
        <FormattedMessage id={"intro.p3"} />
      </p>
      <p>
        <FormattedMessage id={"intro.p4"} />
      </p>
      <p>
        <FormattedMessage id={"intro.p5"} />
        <br />
        <FormattedMessage id={"intro.author"} /> <br />
        <FormattedMessage id={"intro.creator"} />
      </p>
    </section>
  );
};

export default memo(HomePageIntro);
