import './styles.css'
import { StaticMenu } from './menu'

const menu = new StaticMenu('#menu', { x: 30, y: 30 })


menu.add('Случайная фигура', () => console.log('Отличная работа, Лера'))
menu.add('Случайный фон ', () => console.log('Отличная работа, Лера'))
menu.add('Аналитика кликов', () => console.log('Отличная работа, Дарина'))
menu.add('Таймер отсчета', () => console.log('Отличная работа, Настя/Никита?'))
menu.add('Кастомное сообщение', () => console.log('Отличная работа, Аня'))


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