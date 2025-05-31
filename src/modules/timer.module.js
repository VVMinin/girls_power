import { Module } from '../core/module';

export class TimerModule extends Module {
  constructor(type, text) {
    super('timer', 'Таймер');
  }

  trigger() {
    const $containerElement = document.querySelector('.timer-module');
    const $titleElement = document.querySelector('.timer-header');
    const $inputElement = document.querySelector('.timer-input');
    const $buttonElement = document.querySelector('.timer-button');
    const $timeLeftElement = document.querySelector('.time-left');



    $buttonElement.addEventListener('click', (event) => {
      // console.log('click');
      const timeInput = parseInt($inputElement.value);
      
      if (!timeInput || timeInput <= 0) {
        $inputElement.value = '';
        // $inputElement.placeholder = 'Введите корректное число';
        $timeLeftElement.textContent = 'Введите корректное число';
        $timeLeftElement.style.display = 'block';
        $timeLeftElement.style.color = 'white';

        setTimeout(() => {
          $timeLeftElement.style.display = 'none';
          $timeLeftElement.style.color = '';
        }, 1000);

        return 
      } 
      
      
      $titleElement.style.display = 'block';
      $timeLeftElement.style.display = 'block';
      $timeLeftElement.textContent = `Осталось: ${timeInput}`;
      $inputElement.value = '';
      
      let timeSec = timeInput;

      let timerId = setInterval(() => {
            timeSec--;

            if (timeSec >0) {
              $timeLeftElement.textContent = `Осталось: ${timeSec} ` ;
            } else {
              clearInterval(timerId);
              $timeLeftElement.textContent = 'Время вышло';
              setTimeout(() => {
                $titleElement.style.display = 'none';
                $timeLeftElement.style.display = 'none';
              }, 2000);
        }
      }, 1000)

    });
  }



  toHTML() {
    const $container = document.createElement('div');
    $container.className = 'timer-module';

    const $title = document.createElement('h2');
    $title.className = 'timer-header';
    $title.textContent = this.text;
    $title.style.display = 'none';

    const $input = document.createElement('input');
    $input.className = 'timer-input';
    $input.placeholder = 'Введите число';

    const $button = document.createElement('button');
    $button.className = 'timer-button';
    $button.textContent = 'Старт';

    const $timeLeft = document.createElement('p');
    $timeLeft.className = 'time-left'; 
    $timeLeft.textContent = `Осталось: `;
    $timeLeft.style.display = 'none';

    $container.append($title, $input, $button, $timeLeft);

    return $container;
  } 

}