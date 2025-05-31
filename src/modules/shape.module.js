import {Module} from '../core/module'
import {random} from '../utils'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const shape = document.createElement('div')
        const size = random(50, 200)
        const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`

        shape.style.cssText = `
      position: fixed;
      top: ${random(0, window.innerHeight - size)}px;
      left: ${random(0, window.innerWidth - size)}px;
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      border-radius: ${random(0, 50)}%;
      z-index: 999;
    `

        document.body.appendChild(shape)
        setTimeout(() => shape.remove(), 3000)
    }
}