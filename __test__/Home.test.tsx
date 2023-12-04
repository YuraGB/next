//https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
import './setupTests.mock'

import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { FirebaseOptions } from '@firebase/app'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { FirebaseStorage, getStorage } from '@firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)

export const storage: FirebaseStorage = getStorage(app)

it('should have H1 Home', () => {
  render(<Home />) //ARRANGE

  const elem: HTMLParagraphElement = screen.getByRole('heading', {
    name: 'Home',
  }) //ACT

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(elem).toBeInTheDocument() //ASSERT
})
