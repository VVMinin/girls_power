import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        this.modules = []

        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.open(event.clientX, event.clientY)
        })

        this.el.addEventListener('click', (event) => {
            const {type} = event.target.dataset
            if (type) {
                const module = this.modules.find(m => m.type === type)
                if (module) {
                    module.trigger()
                }
                this.close()
            }
        })
    }

    open(x, y) {
        if (this.modules.length) {
            this.el.style.left = `${x}px`
            this.el.style.top = `${y}px`
            this.el.classList.add('open')
        }
    }

    close() {
        this.el.classList.remove('open')
    }

    add(module) {
        this.modules.push(module)
        this.el.insertAdjacentHTML('beforeend', module.toHTML())
    }
}