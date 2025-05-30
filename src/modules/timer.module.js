import { Module } from '../core/module';

export class TimerModule extends Module {
  constructor(type, text) {
    super('timer', 'Таймер');
  }

  trigger() {
    const $inputElement = document.querySelector('.timer-input');
    const $buttonElement = document.querySelector('.timer-button');
    const $timeLeftElement = document.querySelector('.time-left');

    $buttonElement.addEventListener('click', () => {});


  }



  toHTML() {
    const $container = document.createElement('div');
    $container.className = 'timer-module';

    const $title = document.createElement('h2');
    $title.className = 'timer-header';
    $title.textContent = this.text;

    const $input = document.createElement('input');
    $input.className = 'timer-input';
    $input.placeholder = 'Введите время';

    const $button = document.createElement('button');
    $button.className = 'timer-button';
    $button.textContent = 'Старт';

    const $timeLeft = document.createElement('p');
    $timeLeft.className = 'time-left'; 
    $timeLeft.textContent = `Осталось: `;

    $container.append($title, $input, $button, $timeLeft);

    return $container;
  }

}