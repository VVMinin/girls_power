import {Module} from '../core/module'

export class MessageModule extends Module {
    constructor() {
        super('message', 'Показать сообщение')
    }

    trigger() {
        const message = 'Hello World!'
        const popup = document.createElement('div')
        popup.className = 'message-popup'
        popup.textContent = message

        popup.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px 30px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 3px 15px rgba(0,0,0,0.2);
      z-index: 1001;
    `

        document.body.appendChild(popup)
        setTimeout(() => popup.remove(), 2000)
    }
}