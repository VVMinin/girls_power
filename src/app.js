import './styles.css'
import { StaticMenu } from './menu'

const menu = new StaticMenu('#menu', { x: 30, y: 30 })


menu.add('Функция 1', () => alert('Выполнена Функция 1'))
menu.add('Функция 2', () => alert('Выполнена Функция 2'))
menu.add('Функция 3', () => alert('Выполнена Функция 3'))
menu.add('Функция 4', () => alert('Выполнена Функция 4'))
menu.add('Функция 5', () => alert('Выполнена Функция 5'))


let isDragging = false
let offsetX, offsetY

menu.el.addEventListener('mousedown', (e) => {
    isDragging = true
    offsetX = e.clientX - menu.el.getBoundingClientRect().left
    offsetY = e.clientY - menu.el.getBoundingClientRect().top
    menu.el.style.cursor = 'grabbing'
})

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return
    menu.move(e.clientX - offsetX, e.clientY - offsetY)
})

document.addEventListener('mouseup', () => {
    isDragging = false
    menu.el.style.cursor = 'pointer'
})