import { Module } from "../core/module";
import { timer, activationCounting, customAlert } from "../utils";

export class ClicksModule extends Module {
  trigger() {
    let counters = { oneClick: 0, doubleClick: 0 };
    let counting = true;

    activationCounting(counters, counting);
    timer();
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(counters);
        resolve(counters);
      }, 5000);
    }).then((counters) => {
      counting = false;
      customAlert(`Вы жмакнули: 
        ${counters.oneClick - counters.doubleClick * 2} раз - одним кликом,
        ${counters.doubleClick} раз - двойным кликом.`);
    });
  }
}
