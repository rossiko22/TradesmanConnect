import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
let ChoosesserviceComponent = class ChoosesserviceComponent {
    languageService;
    accountstatusService;
    router;
    currentLang = '';
    constructor(languageService, accountstatusService, router) {
        this.languageService = languageService;
        this.accountstatusService = accountstatusService;
        this.router = router;
    }
    ngOnInit() {
        this.currentLang = this.languageService.getCurrentLanguage();
    }
    setAccountStatus(status) {
        this.accountstatusService.setAccountStatus(status);
        return this.router.navigate(['/login-register']);
    }
};
ChoosesserviceComponent = __decorate([
    Component({
        selector: 'app-choosesservice',
        imports: [TranslatePipe],
        templateUrl: './choosesservice.component.html',
        styleUrl: './choosesservice.component.css'
    })
], ChoosesserviceComponent);
export { ChoosesserviceComponent };
