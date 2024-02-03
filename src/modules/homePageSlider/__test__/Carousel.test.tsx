import '@/../__test__/setupTests.mock'
import { render, screen, waitFor } from '@testing-library/react'
import HomePageSlider from '@/modules/homePageSlider'

describe('Slider tests', () => {
  it.skip('Props photo will be null', async () => {
    const Result = await HomePageSlider()

    render(Result)

    const elem = screen.queryAllByAltText('Yuhur photo') //ACT
    await waitFor(
      () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        expect(elem[0]).not.toBeInTheDocument() //ASSERT
    )
  })
})
