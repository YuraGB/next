//https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/page'

jest.mock('../src/modules/homePageSlider', () => {
  // Replace with the actual path to your FirebaseComponent
  return {
    __esModule: true,
    default: () => <div>Firebase component mock</div>,
  }
})

it('should have H1 Home', async () => {
  render(<Home />)

  const elem = screen.getByRole('heading', {
    name: 'Home',
  })
  await waitFor(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument()
  )
})
