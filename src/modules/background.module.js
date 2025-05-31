import { Module } from '../core/module';
import { getRandomColor } from '../utils';

export class BackgroundModule extends Module {
    trigger() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    }
}
