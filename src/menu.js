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
    }


    open() {}
    close() {}

    add(text, callback) {
        const item = { text, callback }
        this.items.push(item)
        this.render()
    }

    render() {
        this.el.innerHTML = this.items.map(item => `
      <li class="menu-item">
        ${item.text}
      </li>
    `).join('')

        this.el.querySelectorAll('.menu-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                this.items[index].callback()
            })
        })
    }


    move(x, y) {
        this.el.style.left = `${x}px`
        this.el.style.top = `${y}px`
    }
}