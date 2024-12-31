import { Injectable, OnInit } from '@angular/core';
import { Language } from '../shared/types/language.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService{
  currentLanguage: Language = 'mk';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: Language): void {
    this.currentLanguage = language;
    this.translate.use(this.currentLanguage);
  }

}
