import {Module} from '../core/module'
import {getRandomColor} from '../utils'

export class BackgroundModule extends Module {
 trigger() {
    const randomColor = getRandomColor()
    parentElement.style.backgroundColor = randomColor
  }
}
