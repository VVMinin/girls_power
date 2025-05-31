import { Module } from '../core/module';
import { random, getButton, createOverlay } from '../utils';

export class CatModule extends Module {
  #counter;
  constructor(type, text) {
    super(type, text);

    //Элемент
    this.$catElementHTML = document.createElement('div');
    this.$catElementHTML.style.position = 'fixed';
    this.$catElementHTML.style.display = 'flex';
    this.$catElementHTML.style.flexDirection = 'column';
    this.$catElementHTML.style.alignItems = 'center';
    this.$catElementHTML.style.gap = '15px';
    this.$catElementHTML.style.width = '200px';
    this.$catElementHTML.style.padding = '10px';
    this.$catElementHTML.style.backgroundColor = '#DCDCDC';
    this.$catElementHTML.style.textAlign = 'center';
    this.$catElementHTML.style.whiteSpace = 'pre-line';

    //Кнопка
    this.$catButtonHTML = getButton(this.#buttonClick.bind(this));

    //Остальное
    this.#counter = 0;
    this.elementText = [
      'Тут кот',
      'И это кот',
      'Вы не поверите,\n но тут тоже кот',
      'Простите,\n у нас больше не осталось котов',
    ];
    this.buttonText = ['Погладить кота', 'И этого кота погладить', 'Все равно погладить', 'Жаль'];
    this.$overlay = createOverlay(this.#removeCat.bind(this));
  }

  #buttonClick() {
    this.#fillingCatElement();
    if (this.#counter > this.elementText.length) {
      this.#removeCat();
    }
  }

  #fillingCatButton() {
    this.$catButtonHTML.textContent = this.buttonText[this.#counter];
  }

  #fillingCatElement() {
    this.$catElementHTML.textContent = this.elementText[this.#counter];
    this.$catElementHTML.style.top = `${random(20, 80)}%`;
    this.$catElementHTML.style.right = `${random(20, 80)}%`;
    this.#fillingCatButton();
    this.$catElementHTML.append(this.$catButtonHTML);
    this.#counter++;
  }

  #removeCat() {
    if (document.body.contains(this.$catElementHTML)) {
      document.body.removeChild(this.$catElementHTML);
    }
    if (document.body.contains(this.$overlay)) {
      document.body.removeChild(this.$overlay);
    }
    this.#counter = 0;
  }

  trigger() {
    this.#fillingCatElement();
    document.body.append(this.$overlay, this.$catElementHTML);
    console.log(this.$overlay);
  }
}
