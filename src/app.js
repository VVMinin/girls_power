import './styles.css';
import './styles.css';
import { CatModule } from './modules/cat.module';

const cat = new CatModule('cat', 'Погладить кота');
window.addEventListener('keydown', (e) => {
  if (e.key === 'q') {
    cat.trigger();
  }
});
console.log(cat);
