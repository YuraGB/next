import '@/../__test__/setupTests.mock'
import { render, screen } from '@testing-library/react'
import HomePageSlider from '@/modules/homePageSlider'

describe('Slider tests', () => {
  it('Props photo will be null', () => {
    render(<HomePageSlider />) //ARRANGE

    const elem = screen.queryByAltText('Yuhur photo') //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })
})
