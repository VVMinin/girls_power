import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        let clickCount = 0
        let timeout

        const clickHandler = () => {
            clickCount++
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                alert(`Вы сделали ${clickCount} кликов!`)
                clickCount = 0
            }, 3000)
        }

        document.body.addEventListener('click', clickHandler)
        setTimeout(() => {
            document.body.removeEventListener('click', clickHandler)
        }, 10000)
    }
}