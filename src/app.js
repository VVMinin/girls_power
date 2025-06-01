import { CatModule } from './modules/cat.module';
import './styles.css';
import { TimerModule } from './modules/timer.module';
import { ContextMenu } from './menu';
import { ShapeModule } from './modules/shape.module';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { MessageModule } from './modules/message.module';

// Таймер
const timer = new TimerModule();
document.body.append(timer.toHTML());
timer.trigger();

// Кот
const cat = new CatModule('cat', 'Погладить кота');
window.addEventListener('keydown', (e) => {
  if (e.key === 'q') {
    cat.trigger();
  }
});

// Контекстное меню
const menu = new ContextMenu('#menu');
menu.add(new ShapeModule('shape', 'Случайная фигура'));
menu.add(new BackgroundModule('background', 'Случайный фон'));
menu.add(new ClicksModule('clicks', 'Аналитика кликов'));
menu.add(new MessageModule('message', 'Кастомное сообщение'));
menu.add(cat);

console.log(menu);
// console.log(menu);