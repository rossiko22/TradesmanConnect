import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
let ChooselanguageComponent = class ChooselanguageComponent {
    languageService;
    router;
    constructor(languageService, router) {
        this.languageService = languageService;
        this.router = router;
    }
    setCurrentLanguage(language) {
        this.languageService.setCurrentLanguage(language);
        return this.router.navigate(['/choose-service']);
    }
};
ChooselanguageComponent = __decorate([
    Component({
        selector: 'app-chooselanguage',
        imports: [CommonModule],
        templateUrl: './chooselanguage.component.html',
        styleUrl: './chooselanguage.component.css'
    })
], ChooselanguageComponent);
export { ChooselanguageComponent };
