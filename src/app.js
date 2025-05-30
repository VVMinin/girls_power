import './styles.css'
import { TimerModule } from './modules/timer.module';

const timer = new TimerModule();
document.body.append(timer.toHTML());
timer.trigger();

