import { render, screen } from '@testing-library/react'
import PhotoItem from '@/modules/homePageSlider/components/PhotoItem/PhotoItem'
import React from 'react'

describe('PhotoItem tests', () => {
  it('Props photo will be null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<PhotoItem photo={null} />) //ARRANGE

    const elem = screen.queryByAltText('Yuhur photo') //ACT

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).not.toBeInTheDocument() //ASSERT
  })
})
