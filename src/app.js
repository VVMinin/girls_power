
import { CatModule } from './modules/cat.module';
import './styles.css'
import { TimerModule } from './modules/timer.module';

const timer = new TimerModule();
document.body.append(timer.toHTML());
timer.trigger();

const cat = new CatModule('cat', 'Погладить кота');
window.addEventListener('keydown', (e) => {
  if (e.key === 'q') {
    cat.trigger();
  }
});
console.log(cat);
