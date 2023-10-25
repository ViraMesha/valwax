import { configuratorSectionI } from '@components/types'

import cinnamonVanilla from '../../../../../public/images/create-your-own/Cinnamon-Vanilla.jpg'
import coconut from '../../../../../public/images/create-your-own/Coconut.jpg'
import dryGin from '../../../../../public/images/create-your-own/Dry-Gin.jpg'
import freshCoffee from '../../../../../public/images/create-your-own/Fresh-Coffee.jpg'
import grapefruitMint from '../../../../../public/images/create-your-own/Grapefruit-Mint.jpg'
import hexagon from '../../../../../public/images/create-your-own/Hexagon.jpg'
import palm from '../../../../../public/images/create-your-own/Palm.jpg'
import pumpkinSpice from '../../../../../public/images/create-your-own/Pumpkin-Spice.jpg'
import pureCotton from '../../../../../public/images/create-your-own/Pure-Cotton.jpg'
import shuttle from '../../../../../public/images/create-your-own/Shuttle.jpg'
import soy from '../../../../../public/images/create-your-own/Soy.jpg'
import one from '../../../../../public/images/create-your-own/wick-1.jpg'
import two from '../../../../../public/images/create-your-own/wick-2.jpg'
import three from '../../../../../public/images/create-your-own/wick-3.jpg'
import four from '../../../../../public/images/create-your-own/wick-4.jpg'
import yinYang from '../../../../../public/images/create-your-own/Yin-Yang.jpg'


export const configuratorData = (data: configuratorSectionI) => {
  return (
    {
      container: {
        number: data.container.number,
        title: data.container.title,
        options: data.container.options,
        // ["Container 1", "Container 2", "Container 3", "Container 4"]
        images: [hexagon, yinYang, shuttle, yinYang],
      },
      // capacity: {
      //   number: data.capacity.number,
      //   title: data.capacity.title,
      //   options: data.capacity.options,
      // },
      wax: {
        number: data.wax.number,
        title: data.wax.title,
        options: data.wax.options,
        // "Соевий", "Кокосовий", "Пальмовий"
        images: [soy, coconut, palm],
      },
      aroma: {
        number: data.aroma.number,
        title: data.aroma.title,
        options: data.aroma.options,
        //  ["Pure Cotton", "Cinnamon & Vanilla", "Rose Petals", "Fresh Coffee", "Dry Gin", "Pumpkin Spice", "Grapefruit and Mint"]
        images: [pureCotton, cinnamonVanilla, cinnamonVanilla, freshCoffee, dryGin, pumpkinSpice, grapefruitMint],
      },
      wick: {
        number: data.wick.number,
        title: data.wick.title,
        options: data.wick.options,

        images: [one, two, three, four],
      },
      color: {
        number: data.color.number,
        title: data.color.title,
        options: data.color.options,
        // ["Жовтий", "Червоний", "Лаванда", "Чорний"]
        colors: ['#FFF95E', 'var(--cl-error-500)', '#6E67B7' , 'var(--cl-gray-900)', 'var(--cl-white)']
      }
    }
  )
};