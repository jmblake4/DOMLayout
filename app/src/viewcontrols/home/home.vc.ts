import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    replaceWith: string = null;
    templateString: string = require('./home.vc.html');
    context = {
        items: <Array<number>>null
    };

    initialize() {
        let items = <Array<number>>[];
        for (let i = 1; i <= 100; ++i) {
            items.push(i);
        }

        this.context.items = items;
    }
}

register.viewControl('home-vc', HomeViewControl);
