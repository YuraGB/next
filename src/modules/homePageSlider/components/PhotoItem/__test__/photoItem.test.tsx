import { render, screen } from '@testing-library/react'
import PhotoItem from '@/modules/homePageSlider/components/PhotoItem/PhotoItem'

describe('PhotoItem tests', () => {
  const dummyPhotoUrl =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Furl%2F&psig=AOvVaw3oiFcQx0aQynSdpACVBZGE&ust=1701791177774000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjt4aeQ9oIDFQAAAAAdAAAAABAD'

  it('Props photo will be null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<PhotoItem photo={null} />) //ARRANGE

    const elem = screen.queryByAltText('Yuhur photo') //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).not.toBeInTheDocument() //ASSERT
  })

  it('Should be image', () => {
    render(<PhotoItem photo={dummyPhotoUrl} />) //ARRANGE

    const elem: HTMLImageElement | null = screen.queryByAltText('Yuhur photo') //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })
})
