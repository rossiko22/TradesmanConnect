import { of } from 'rxjs';
import { en } from './assets/i18n/en';
import { mk } from './assets/i18n/mk';
export class CustomTranslateLoader {
    getTranslation(lang) {
        switch (lang) {
            case 'en':
                return of(en);
            case 'mk':
                return of(mk);
            default:
                return of(en);
        }
    }
}
