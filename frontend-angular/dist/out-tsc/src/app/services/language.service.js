import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LanguageService = class LanguageService {
    translate;
    currentLanguage = 'mk';
    constructor(translate) {
        this.translate = translate;
        this.translate.setDefaultLang(this.currentLanguage);
        this.translate.use(this.currentLanguage);
    }
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    setCurrentLanguage(language) {
        this.currentLanguage = language;
        this.translate.use(this.currentLanguage);
    }
};
LanguageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LanguageService);
export { LanguageService };
