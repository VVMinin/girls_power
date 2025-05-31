import './styles.css'
import { StaticMenu } from './menu'
import { ShapeModule } from "./modules/shape.module"
import { BackgroundModule } from "./modules/background.module"

const menu = new StaticMenu('#menu', { x: 30, y: 30 })

// Register modules
const modules = [
    new BackgroundModule(),
    new ShapeModule()
]

modules.forEach(module => {
    menu.add(module.text, () => {
        try {
            module.trigger()
        } catch (error) {
            console.error(`Error executing module ${module.type}:`, error)
        }
    })
})
import { TimerModule } from './modules/timer.module';

const timer = new TimerModule();
document.body.append(timer.toHTML());
timer.trigger();

// Additional menu items
menu.add('Аналитика кликов', () => console.log('Аналитика кликов запущена'))
menu.add('Таймер отсчета', () => console.log('Таймер отсчета запущен'))
menu.add('Кастомное сообщение', () => console.log('Кастомное сообщение создано'))

// Drag and drop implementation
let isDragging = false
let offsetX, offsetY

menu.el.addEventListener('mousedown', (e) => {
    if (e.target.closest('.menu-item')) return

    isDragging = true
    const rect = menu.el.getBoundingClientRect()
    offsetX = e.clientX - rect.left
    offsetY = e.clientY - rect.top
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