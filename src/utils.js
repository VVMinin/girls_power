export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function activationCounting (counters, counting) {
const root = document.querySelector('body')
root.style.backgroundColor = '#BADBAD'
root.style.fontFamily = 'Montserrat, sans-serif'
root.style.fontSize = '18px'

 window.addEventListener('dblclick', () => {
  if (counting === true) {
    counters.doubleClick += 1
}
})

window.addEventListener('click', () => {
  if (counting === true) {
    counters.oneClick += 1
  }
})
}

export function timer () {
    const timeCount = document.createElement('p')
    timeCount.className = 'timer'
    const rootElement = document.querySelector('body')
    rootElement.append(timeCount)
    let time = 5
    timeCount.textContent = time;
    const timerPlay = setInterval(() => {
        timeCount.textContent = time <= 0 ? clearInterval(timerPlay) : --time
    }, 1000)
}

export function customAlert (text) {
  const rootElement = document.querySelector('body')
  
  const modalWindow = document.createElement('div')
  modalWindow.className = 'modal_window_alert'
  rootElement.append(modalWindow)

  const textAlert = document.createElement('p')
  textAlert.className = 'message'
  textAlert.textContent = text
  modalWindow.append(textAlert)

  const closeButton = document.createElement('button')
  closeButton.className = 'button_close'
  closeButton.textContent = 'Закрыть'
  modalWindow.append(closeButton)

  closeButton.addEventListener('click', () => {
    modalWindow.remove()
  })

}