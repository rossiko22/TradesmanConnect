import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
let ContactPageComponent = class ContactPageComponent {
};
ContactPageComponent = __decorate([
    Component({
        selector: 'app-contact-page',
        imports: [CommonModule, RouterLink],
        templateUrl: './contact-page.component.html',
        styleUrl: './contact-page.component.css'
    })
], ContactPageComponent);
export { ContactPageComponent };
