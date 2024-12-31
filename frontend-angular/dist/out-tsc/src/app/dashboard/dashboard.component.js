import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
let DashboardComponent = class DashboardComponent {
    accountStatusService;
    accountStatus = null;
    constructor(accountStatusService) {
        this.accountStatusService = accountStatusService;
    }
    ngOnInit() {
        this.accountStatus = this.accountStatusService.getAccountStatus();
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        imports: [RouterLink, CommonModule],
        templateUrl: './dashboard.component.html',
        styleUrl: './dashboard.component.css'
    })
], DashboardComponent);
export { DashboardComponent };
