import {
  getDownloadURL,
  listAll,
  ref,
  StorageReference,
} from '@firebase/storage'
import { storage } from '@/config/fireBase.config'

type GetPhotosT = (folder: string) => Promise<string[]>

// get saved items from Firebase storage
export const getPhotos: GetPhotosT = async (folder: string = '') => {
  const { items }: { items: StorageReference[] } = await listAll(
    ref(storage, folder)
  )

  return Promise.all(items.map((image) => getDownloadURL(image)))
}
