import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { en } from './assets/i18n/en';
import { mk } from './assets/i18n/mk';

export class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
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