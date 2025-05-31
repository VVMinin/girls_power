import { Module } from '../core/module'

export class TimerModule extends Module {
  constructor() {
    super('timer', 'Таймер')
  }

  trigger() {
    // Создаем элементы, если их нет
    if (!document.querySelector('.timer-module')) {
      document.body.appendChild(this.toHTML())
    }

    const $container = document.querySelector('.timer-module')
    const $title = $container.querySelector('.timer-header')
    const $input = $container.querySelector('.timer-input')
    const $button = $container.querySelector('.timer-button')
    const $timeLeft = $container.querySelector('.time-left')

    // Показываем контейнер
    $container.style.display = 'block'
    $title.style.display = 'block'
    $input.style.display = 'block'
    $button.style.display = 'block'
    $timeLeft.style.display = 'none'

    $button.onclick = () => {
      const timeInput = parseInt($input.value)

      if (!timeInput || timeInput <= 0) {
        $timeLeft.style.display = 'block'
        $timeLeft.textContent = 'Введите корректное число'
        return
      }

      $timeLeft.style.display = 'block'
      $timeLeft.textContent = `Осталось: ${timeInput} сек`
      $input.value = ''

      let remainingTime = timeInput
      const timerId = setInterval(() => {
        remainingTime--

        if (remainingTime > 0) {
          $timeLeft.textContent = `Осталось: ${remainingTime} сек`
        } else {
          clearInterval(timerId)
          $timeLeft.textContent = 'Время вышло!'
          setTimeout(() => {
            $container.style.display = 'none'
          }, 2000)
        }
      }, 1000)
    }
  }

  toHTML() {
    const $container = document.createElement('div')
    $container.className = 'timer-module'
    $container.style.display = 'none'

    const $title = document.createElement('h2')
    $title.className = 'timer-header'
    $title.textContent = this.text

    const $input = document.createElement('input')
    $input.className = 'timer-input'
    $input.type = 'number'
    $input.placeholder = 'Секунды'
    $input.min = '1'

    const $button = document.createElement('button')
    $button.className = 'timer-button'
    $button.textContent = 'Старт'

    const $timeLeft = document.createElement('div')
    $timeLeft.className = 'time-left'

    $container.append($title, $input, $button, $timeLeft)
    return $container
  }
}