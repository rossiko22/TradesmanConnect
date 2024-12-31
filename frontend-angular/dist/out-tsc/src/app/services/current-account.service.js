import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CurrentAccountService = class CurrentAccountService {
    currentLoggedInUser = {
        tradesmanFirstName: 'John Doe',
        tradesmanLastName: 'Smith',
        contactEmail: 'john.doe@example.com',
        contactPhone: '1234567890',
        id: 1234567890,
    };
    setCurrentUser(user) {
        this.currentLoggedInUser = user;
    }
    getCurrentUser() {
        return this.currentLoggedInUser;
    }
};
CurrentAccountService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CurrentAccountService);
export { CurrentAccountService };
