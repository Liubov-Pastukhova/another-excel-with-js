import {$} from '@core/dom';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');
        this.components = this.components.map((Component) => {
            const $elem = $.create('div', Component.className);
            const component = new Component($elem);
            // DEBUG
            // if (component.name) {
            //     window['c' + component.name] = component;
            // }
            $elem.html(component.toHTML());
            $root.append($elem);
            return component;
        });
        return $root;
    }
    render() {
        this.$el.append(this.getRoot());
        this.components.forEach((component) => component.init());
    }
}
