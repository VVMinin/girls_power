import { Module } from '../core/module';
import { random } from '../utils';

export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.phrases = [
      'Если долго смотреть на код,\n код начнет смотреть на тебя',
      'Не шалю, никого не трогаю, починяю примус',
      'Раньше меня тоже вела дорога приключений,\n но потом мне прострелили колено',
      '"Error: 404" \n \n \n Шучу, мне просто лень что-то придумать',
      'Код не работает, и я не знаю почему.\n Код заработал, и я не знаю почему',
      'Кошки никогда не спят,\n кроме тех случаев, когда они бодрствуют',
      'Не забудь оплатить интернет',
    ];
    this.$messageHTML = this.#createMessageElement();
  }
  #createMessageElement() {
    const element = document.createElement('div');
    element.style.position = 'fixed';
    element.style.bottom = '0';
    element.style.right = '0';
    element.style.height = '200px';
    element.style.width = '400px';
    element.style.padding = '20px';
    element.style.paddingTop = '100px';
    element.style.backgroundColor = '#B5C9D1';
    element.style.verticalAlign = 'center';
    element.style.textAlign = 'center';
    element.style.whiteSpace = 'pre-line';
    return element;
  }

  #setPhrase() {
    return this.phrases[random(0, this.phrases.length - 1)];
  }

  trigger() {
    if (!document.body.contains(this.$messageHTML)) {
      this.$messageHTML.textContent = this.#setPhrase();
      document.body.append(this.$messageHTML);

      setTimeout(() => {
        document.body.removeChild(this.$messageHTML);
      }, 3000);
    }
  }
}
