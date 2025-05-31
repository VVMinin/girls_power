import { Menu } from './core/menu'

export class StaticMenu extends Menu {
    constructor(selector, position = { x: 20, y: 20 }) {
        super(selector)
        this.position = position
        this.items = []
        this.init()
    }

    init() {
        this.el.style.display = 'block'
        this.el.style.position = 'fixed'
        this.el.style.left = `${this.position.x}px`
        this.el.style.top = `${this.position.y}px`
        this.el.style.zIndex = '10000'
        this.el.style.cursor = 'pointer'
        this.el.style.userSelect = 'none'
    }

    add(text, callback) {
        this.items.push({ text, callback })
        this.render()
    }

    render() {
        this.el.innerHTML = `
      <ul class="menu-list">
        ${this.items.map(item => `
          <li class="menu-item" data-type="${item.text.replace(/\s+/g, '-').toLowerCase()}">
            ${item.text}
          </li>
        `).join('')}
      </ul>
    `

        this.items.forEach((item, index) => {
            const menuItem = this.el.querySelector(`[data-type="${item.text.replace(/\s+/g, '-').toLowerCase()}"]`)
            if (menuItem) {
                menuItem.addEventListener('click', item.callback)
            }
        })
    }

    move(x, y) {
        this.position = { x, y }
        this.el.style.left = `${x}px`
        this.el.style.top = `${this.position.y}px`
    }
}