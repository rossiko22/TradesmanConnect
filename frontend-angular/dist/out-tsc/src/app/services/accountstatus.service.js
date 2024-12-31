import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AccountstatusService = class AccountstatusService {
    accountStatus = 'tradesman';
    getAccountStatus() {
        return this.accountStatus;
    }
    setAccountStatus(status) {
        this.accountStatus = status;
    }
};
AccountstatusService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AccountstatusService);
export { AccountstatusService };
