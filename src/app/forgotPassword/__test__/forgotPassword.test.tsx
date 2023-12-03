import { render, screen, waitFor } from '@testing-library/react'
import ForgotPassword from '@/app/forgotPassword/page'

describe('Forgot password page', () => {
  it('Forgot password H1 Forgot passwprd', async () => {
    render(<ForgotPassword />) //ARRANGE

    const elem: HTMLParagraphElement = screen.getByRole('heading', {
      name: 'Forgot password ?',
    }) //ACT
    await waitFor(
      () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        expect(elem).toBeInTheDocument() //ASSERT
    )
  })
})
