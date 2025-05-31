import { Menu } from './core/menu';

export class ContextMenu extends Menu {
    constructor(selector = '#menu') {
        super(selector);
        this.items = [];

        // Обработчик правого клика для открытия меню
        window.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            if (this.items.length === 0) return; // Если нет пунктов меню — не показывать

            this.open(event.pageX, event.pageY);
        });

        // Обработчик клика по пункту меню
        this.el.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            if (!menuItem) return;
            const type = menuItem.dataset.type;
            const module = this.items.find((m) => m.type === type);
            if (module) {
                module.trigger();
                this.close();
            }
        });
    }

    open(x, y) {
        this.el.style.left = `${x}px`;
        this.el.style.top = `${y}px`;
        this.el.classList.add('open');
    }

    close() {
        this.el.classList.remove('open');
    }

    add(module) {
        if (!(module instanceof Object)) {
            throw new Error('add() expects a module instance');
        }
        this.items.push(module);
        const html = module.toHTML();
        this.el.insertAdjacentHTML('beforeend', html);
    }
}
