import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
let CreateServiceComponent = class CreateServiceComponent {
    formBuilder;
    router;
    currentAccountService;
    http;
    serviceForm;
    currentAccount = null;
    constructor(formBuilder, router, currentAccountService, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.currentAccountService = currentAccountService;
        this.http = http;
    }
    ngOnInit() {
        this.serviceForm = this.formBuilder.group({
            serviceTitle: ['', Validators.required],
            serviceCategory: ['', Validators.required],
            serviceCountry: ['', Validators.required],
            serviceCity: ['', Validators.required],
            availableDaysStart: ['', Validators.required],
            availableDaysEnd: ['', Validators.required],
            serviceTimeStart: ['', Validators.required],
            serviceTimeEnd: ['', Validators.required]
        });
        this.currentAccount = this.currentAccountService.getCurrentUser();
    }
    onSubmit() {
        if (this.serviceForm.valid) {
            const service = this.serviceForm.value;
            const firstAndLastName = {
                tradesmanFirstName: this.currentAccount?.tradesmanFirstName,
                tradesmanLastName: this.currentAccount?.tradesmanLastName,
                contactPhone: this.currentAccount?.contactPhone,
                contactEmail: this.currentAccount?.contactEmail
            };
            console.log(service);
            const objectToSend = { ...firstAndLastName, ...service };
            console.log(objectToSend);
            this.http.post('http://localhost:3000/tradesman-services', objectToSend)
                .subscribe({
                next: (response) => {
                    console.log(response);
                    // this.serviceForm.reset();
                },
                error: (error) => {
                    console.error('Error creating service', error);
                    alert('Error creating service');
                }
            });
        }
    }
    goBack() {
        this.router.navigate(['/dashboard']);
    }
};
CreateServiceComponent = __decorate([
    Component({
        selector: 'app-create-service',
        templateUrl: './create-service.component.html',
        styleUrls: ['./create-service.component.css'],
        standalone: true,
        imports: [ReactiveFormsModule, CommonModule]
    })
], CreateServiceComponent);
export { CreateServiceComponent };
