import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

it('should have H1 Home', () => {
  render(<Home />) //ARRANGE

  const elem: HTMLParagraphElement = screen.getByRole('heading', {
    name: 'Home',
  }) //ACT

  expect(elem).toBeInTheDocument() //ASSERT
})
