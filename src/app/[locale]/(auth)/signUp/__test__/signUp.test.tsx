import { render, screen, waitFor } from '@testing-library/react'
import RegisterPage from '@/app/[locale]/(auth)/signUp/page'
import ServerIntlProvider from '@/context/i18nProvider'
import { ReactNode } from 'react'
import { createIntl } from '@formatjs/intl'
import en from '../../../../../i18n/en.json'

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('Sign up page', () => {
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

  it('should have H1 Sign up', async () => {
    render(<RegisterPage />, {
      wrapper: Wrapper,
    }) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('heading', {
      name: 'Registration',
    }) //ACT

    await waitFor(
      () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        expect(elem).toBeInTheDocument() //ASSERT
    )
  })

  it('should have submit button Sign up of the Registration form', async () => {
    render(<RegisterPage />, { wrapper: Wrapper }) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('button', {
      name: 'Sign up',
    }) //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })

  it('should have the form on the Registration page', async () => {
    render(<RegisterPage />, { wrapper: Wrapper }) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('form', {
      name: 'registration form',
    }) //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })
})
