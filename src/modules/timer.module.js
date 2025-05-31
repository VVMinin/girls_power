import {Module} from '../core/module'

export class TimerModule extends Module {
  constructor() {
    super('timer', 'Таймер')
  }

  trigger() {
    const duration = prompt('Введите время в секундах:', '10')
    if (!duration) return

    let seconds = parseInt(duration)
    if (isNaN(seconds)) return

    const timerElement = document.createElement('div')
    timerElement.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 10px 20px;
      background: white;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 1001;
    `

    const updateTimer = () => {
      timerElement.textContent = `Осталось: ${seconds} сек`
      seconds--

      if (seconds < 0) {
        timerElement.textContent = 'Время вышло!'
        setTimeout(() => timerElement.remove(), 2000)
      } else {
        setTimeout(updateTimer, 1000)
      }
    }

    document.body.appendChild(timerElement)
    updateTimer()
  }
}