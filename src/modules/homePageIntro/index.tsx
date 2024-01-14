'use client'
import { memo } from 'react'
import { FormattedMessage } from 'react-intl'

const HomePageIntro = () => {
  return (
    <section className={'text-center leading-8 max-w-[80%] [&>p]:mb-6'}>
      <h1>
        <strong className={'mb-6 text-2xl block max-w-[70%] m-auto'}>
          <FormattedMessage id={'intro.title'} />
        </strong>
      </h1>
      <em className={'mb-6 block'}>
        🌟 <FormattedMessage id={'intro.subtitle'} /> 🌟
      </em>
      <p>
        <FormattedMessage id={'intro.p1'} />
      </p>
      <p>
        <FormattedMessage id={'intro.p2'} />
      </p>{' '}
      <p>
        <FormattedMessage id={'intro.p3'} />
      </p>
      <p>
        <FormattedMessage id={'intro.p4'} />
      </p>
      <p>
        <FormattedMessage id={'intro.p5'} />
        <br />
        <FormattedMessage id={'intro.author'} /> <br />
        <FormattedMessage id={'intro.creator'} />
      </p>
    </section>
  )
}

export default memo(HomePageIntro)
