import {Module} from '../core/module'
import {getRandomColor, getRandomCoords, random} from '../utils'

export class ShapeModule extends Module {
    constructor() {
        super('shape', 'Случайная фигура')
    }

    trigger() {
        const size = random(20, 80)
        const color = getRandomColor()
        const {x, y} = getRandomCoords(size)
        const heartId = `heart-${Date.now()}`

        const style = document.createElement('style')
        style.textContent = `
      @keyframes heartBeat {
        0% { transform: rotate(-45deg) scale(0.8); }
        50% { transform: rotate(-45deg) scale(1.1); }
        100% { transform: rotate(-45deg) scale(1); }
      }
      @keyframes fadeOut {
        to { opacity: 0; }
      }
      #${heartId} {
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        transform: rotate(-45deg);
        background-color: ${color};
        z-index: 9999;
        filter: drop-shadow(0 0 ${size/10}px ${color});
        animation: 
          heartBeat 0.5s ease-in-out,
          fadeOut 0.5s ease-out 2.5s forwards;
      }
      #${heartId}::before, 
      #${heartId}::after {
        content: '';
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
      }
      #${heartId}::before {
        top: -${size/2}px;
        left: 0;
      }
      #${heartId}::after {
        top: 0;
        left: ${size/2}px;
      }
    `

        const heart = document.createElement('div')
        heart.className = 'heart'
        heart.id = heartId

        document.head.appendChild(style)
        document.body.appendChild(heart)

        setTimeout(() => {
            heart.remove()
            style.remove()
        }, 3000)
    }
}