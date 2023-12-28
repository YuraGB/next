'use server'
// import prisma from '../../lib/prisma'

// export const create = async () => {
//   const array = [
//     'https://firebasestorage.googleapis.com/v0/b/next-8767c.appspot.com/o/images%2Fimage1.webp?alt=media&token=7f7e0245-537f-44eb-8d54-5f06cfd2c20b',
//     'https://firebasestorage.googleapis.com/v0/b/next-8767c.appspot.com/o/images%2Fimage2.webp?alt=media&token=a1ad3674-4188-4c0d-aedd-e0f3d9c023f6',
//     'https://firebasestorage.googleapis.com/v0/b/next-8767c.appspot.com/o/images%2Fimage3.webp?alt=media&token=b3861d57-3599-4686-910d-2f4ce6be56ef',
//   ]
//
//   array.map((e) => {
//     prisma?.slide
//       .create({
//         data: {
//           image: e,
//         },
//       })
//       .then((e) => {
//         console.log(e)
//       })
//   })
// }

// export const create = async () => {
//   await prisma.slider.create({
//     data: {
//       sliderID: '1321321',
//       slide: {
//         connect: {
//           id: '658da5ab8d1a2e2e4f81f117',
//         },
//       },
//     },
//   })
// }
