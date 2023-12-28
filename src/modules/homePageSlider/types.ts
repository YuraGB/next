export type PhotoUrl = string

export type PhotoList = PhotoUrl[]

export type Slide = {
  id: string
  title: string | null
  image: string
  description: string | null
  url: string | null
}

export type Slider = {
  slide: Slide[]
}
