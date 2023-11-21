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


export const configuratorData = ({container, wax, aroma, wick, color}: configuratorSectionI) => {
  return (
    {
      container: {
        number: container.number,
        title: container.title,
        options: container.options,
        // ["Container 1", "Container 2", "Container 3", "Container 4"]
        images: [hexagon, yinYang, shuttle, yinYang],
      },
      wax: {
        number: wax.number,
        title: wax.title,
        options: wax.options,
        // "Соевий", "Кокосовий", "Пальмовий"
        images: [soy, coconut, palm],
      },
      aroma: {
        number: aroma.number,
        title: aroma.title,
        options: aroma.options,
        //  ["Чиста бавовна", "Кориця і ваніль", "Пелюстки троянд", "Свіжа кава", "Сухий джин", "Гарбуз зі спеціями", "Грейпфрут і м’ята", "Свіжоскошена трава", "Чорне море", "Імбир і спеції", "Персиковий нектар", "Опале листя", "Кашемірова слива", "Різдвяне вогнище", "Запах землі після дощу"]
        images: [pureCotton, cinnamonVanilla, cinnamonVanilla, freshCoffee, dryGin, pumpkinSpice, grapefruitMint, pureCotton, cinnamonVanilla, cinnamonVanilla, freshCoffee, dryGin, pumpkinSpice, grapefruitMint, dryGin],
      },
      wick: {
        number: wick.number,
        title: wick.title,
        options: wick.options,

        images: [one, two, three, four],
      },
      color: {
        number: color.number,
        title: color.title,
        options: color.options,
        // ["Жовтий", "Червоний", "Лаванда", "Чорний"]
        colors: ['#FFF95E', 'var(--cl-error-500)', '#6E67B7' , 'var(--cl-gray-900)', 'var(--cl-white)']
      }
    }
  )
};
