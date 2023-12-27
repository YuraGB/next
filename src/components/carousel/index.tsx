import React, { ReactNode } from 'react'
import Slider from 'react-slick'

type Props = {
  children: ReactNode | ReactNode[]
}

export default function Carousel({ children }: Props): ReactNode {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }
  return <Slider {...settings}>{children}</Slider>
}
