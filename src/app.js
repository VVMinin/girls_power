import './styles.css'
import {ContextMenu} from './menu'
import {ShapeModule} from './modules/shape.module'
import {MessageModule} from './modules/message.module'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {TimerModule} from './modules/timer.module'

const contextMenu = new ContextMenu('#menu')

contextMenu.add(new ShapeModule('shape', 'Случайная фигура'))
contextMenu.add(new MessageModule())
contextMenu.add(new BackgroundModule('background', 'Случайный фон'))
contextMenu.add(new ClicksModule('clicks', 'Аналитика кликов'))
contextMenu.add(new TimerModule())