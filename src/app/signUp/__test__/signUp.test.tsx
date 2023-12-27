import { render, screen } from '@testing-library/react'
import RegisterPage from '@/app/signUp/page'

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('Sign up page', () => {
  it('should have H1 Sign up', () => {
    render(<RegisterPage />) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('heading', {
      name: 'Registration',
    }) //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })

  it('should have submit button Sign up of the Registration form', () => {
    render(<RegisterPage />) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('button', {
      name: 'Sign up',
    }) //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })

  it('should have the form on the Registration page', () => {
    render(<RegisterPage />) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('form', {
      name: 'registration form',
    }) //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })
})
