import {Module} from '../core/module'
import {getRandomColor, getRandomCoords} from '../utils'

export class ShapeModule extends Module {
    trigger() {
        const heart = document.createElement('div')
        const heartId = 'heart-' + Date.now()
        heart.className = 'heart'
        heart.id = heartId

        const size = Math.floor(Math.random() * 60) + 20
        const color = getRandomColor()
        const {x, y} = getRandomCoords(size)

        const style = document.createElement('style')
        style.textContent = `
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

        document.head.appendChild(style)
        document.body.appendChild(heart)

        setTimeout(() => {
            heart.remove()
            style.remove()
        }, 3000)
    }
}