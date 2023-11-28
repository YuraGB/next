import { render, screen } from '@testing-library/react'
import ForgotPassword from '@/app/forgotPassword/page'

describe('Forgot password page', () => {
  it('Forgot password H1 Forgot passwprd', () => {
    render(<ForgotPassword />) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('heading', {
      name: 'Forgot password ?',
    }) //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })

  it('should have submit button Forgot password', () => {
    render(<ForgotPassword />) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('button', {
      name: 'Send me recovery letter',
    }) //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })

  it('should have the form on the Forgot password page', () => {
    render(<ForgotPassword />) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('form', {
      name: 'Forgot password form',
    }) //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })
})
