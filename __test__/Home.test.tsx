//https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/[locale]/page'
import { createIntl } from '@formatjs/intl'
import en from '@/i18n/en.json'
import { ReactNode } from 'react'
import ServerIntlProvider from '@/context/i18nProvider'
import 'jest-canvas-mock'

jest.mock('../src/modules/homePageSlider', () => {
  // Replace with the actual path to your FirebaseComponent
  return {
    __esModule: true,
    default: () => <div>Firebase component mock</div>,
  }
})

it('should have H1 Home', async () => {
  const intl = createIntl({
    locale: 'en',
    messages: en,
    onError: (e) => console.log(e),
  })
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <ServerIntlProvider locale={intl.locale} messages={intl.messages}>
        {children}
      </ServerIntlProvider>
    )
  }

  render(<Home />, {
    wrapper: Wrapper,
  })

  const elem = screen.getByRole('heading', {
    name: 'Welcome to Fairy tale world - A Magical World of Stories and Fairy Tales for Children',
  })
  await waitFor(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument()
  )
})
