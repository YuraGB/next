import '@/../__test__/setupTests.mock'
import { render, screen, waitFor } from '@testing-library/react'
import HomePageSlider from '@/modules/homePageSlider'
// Import the necessary modules and types
import { listAll, getDownloadURL } from '@firebase/storage'

// Type for the mock implementation
type StorageMock = jest.Mocked<typeof import('@firebase/storage')>

// Mock the Firebase storage module
jest.mock('@firebase/storage')

// Mock the specific functions you use
const mockedListAll = listAll as StorageMock['listAll']
const mockedGetDownloadURL = getDownloadURL as StorageMock['getDownloadURL']

// Mock the behavior of listAll and getDownloadURL
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
mockedListAll.mockImplementation(() => {
  // Implement your mock behavior for listAll
  return Promise.resolve({
    items: [
      /* mock StorageReference objects */
    ],
  })
})

mockedGetDownloadURL.mockImplementation(() => {
  // Implement your mock behavior for getDownloadURL
  return Promise.resolve('https://example.com/mock-image.jpg')
})

// Import the function that uses Firebase

// Your actual test

describe('Slider tests', () => {
  it('Props photo will be null', async () => {
    render(<HomePageSlider />) //ARRANGE

    const elem = screen.queryByAltText('Yuhur photo') //ACT
    await waitFor(
      () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        expect(elem).not.toBeInTheDocument() //ASSERT
    )
  })
})
