'use server'
import prisma from '../../lib/prisma'

// export const create = async () => {
//
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

export const create = async () => {
  await prisma.tale.create({
    data: {
      title: 'The Whispering Wind and the Moonlit Picnic',
      forAge: '3-5 years',
      content:
        'In a sleepy village nestled between rolling hills and ancient oak trees, there lived a gentle breeze named Zephyr. Zephyr loved to play among the flowers and carry the laughter of children through the air. One day, as Zephyr danced through the meadow, a magical idea struck.\n' +
        '\n' +
        'With a soft whisper, Zephyr decided to organize a moonlit picnic for all the woodland creatures. The news spread like wildfire, and soon, a lively buzz filled the forest. Squirrels chattered excitedly, birds sang joyful tunes, and even the wise old tortoise, Terrance, cracked a smile.\n' +
        '\n' +
        'As night fell and the moon cast its silvery glow, the animals gathered in the heart of the forest. Zephyr, with a mischievous twirl, transformed the clearing into a magical picnic spot. Soft blankets made of moonbeams adorned the ground, and fireflies twinkled like fairy lights.\n' +
        '\n' +
        'The aroma of sweet treats wafted through the air as each animal brought a special dish to share. Benny the bunny contributed carrot cupcakes, Luna the owl brought moonberry pie, and Sparkle the butterfly fluttered about with nectar-filled flowers.\n' +
        '\n' +
        "Zephyr, being the gracious host, arranged a celestial feast. The animals feasted under the moonlit sky, sharing stories and laughter. Terrance, with his ancient wisdom, told tales of the forest's history, while the fireflies illuminated the night with their gentle glow.\n" +
        '\n' +
        'As the night progressed, Zephyr guided the creatures in a moonlit dance. The twinkling stars overhead joined the festivities, creating a celestial ballroom where every step was a magical memory in the making.\n' +
        '\n' +
        'In the midst of the celebration, a shooting star streaked across the sky. The animals closed their eyes and made a special wish, sending their hopes into the universe. Zephyr, catching the wishes on the breeze, promised to carry them to the farthest corners of the world.\n' +
        '\n' +
        'As dawn approached, the animals bid farewell with full hearts and joyous memories. Zephyr, with a final twirl, whispered a lullaby to the sleepy village below, ensuring that the magic of the moonlit picnic would be remembered in the dreams of all who attended.\n' +
        '\n' +
        'And so, whenever the wind rustled through the leaves, and the moonlit night descended, the creatures of the enchanted forest would gather once more, carried by the whispers of Zephyr, to share in the magic of the moonlit picnic under the stars.',
      images: [],
      shortDescription: 'The Magical Forest Adventure',
      mainImage: '',
    },
  })
}
