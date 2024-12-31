import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
let LoginregisterComponent = class LoginregisterComponent {
    currentAccountService;
    formBuilder;
    accountStatusService;
    langaugeService;
    http;
    router;
    activeForm = 'login';
    accountStatus;
    currentLang;
    selectedFile = null;
    loginForm = undefined;
    registerForm = undefined;
    registerImage = undefined;
    constructor(currentAccountService, formBuilder, accountStatusService, langaugeService, http, router) {
        this.currentAccountService = currentAccountService;
        this.formBuilder = formBuilder;
        this.accountStatusService = accountStatusService;
        this.langaugeService = langaugeService;
        this.http = http;
        this.router = router;
        this.accountStatus = this.accountStatusService.getAccountStatus();
        this.currentLang = this.langaugeService.getCurrentLanguage();
    }
    toggleForm(form) {
        if (form === 'login') {
            this.activeForm = 'login';
        }
        else if (form === 'register') {
            this.activeForm = 'register';
        }
    }
    checkLogin() {
        console.log(this.loginForm.value);
        this.loginForm.reset();
    }
    checkRegister() {
        if (this.accountStatus === 'tradesman') {
            console.log(this.registerForm.value);
        }
        else if (this.accountStatus === 'client') {
            const object = this.registerForm.value;
            delete object.profession;
            console.log(object);
        }
        this.registerForm.reset();
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            accountEmail: ['', Validators.required],
            password: ['', Validators.required],
            accStatus: this.accountStatus === 'tradesman' ? 'tradesman' : 'client'
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            contactPhone: ['', [Validators.required]],
            contactEmail: ['', [Validators.required]],
            accountEmail: ['', [Validators.required]],
            profession: [''],
            city: ['', [Validators.required, Validators.minLength(2)]],
            country: ['', [Validators.required, Validators.minLength(2)]],
            password: ['', [
                    Validators.required
                ]],
            confirmPassword: ['', [Validators.required]],
            accStatus: this.accountStatus === 'tradesman' ? 'tradesman' : 'client'
        }, {
            validator: this.passwordMatchValidator // This may be a problem
        });
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        if (file) {
            this.selectedFile = file;
            console.log('File selected:', file.name);
        }
        else {
            this.selectedFile = null;
            console.log('No file selected');
        }
    }
    passwordMatchValidator(formGroup) {
        const password = formGroup.get('password')?.value;
        const confirmPassword = formGroup.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { mismatch: true };
    }
    handleRegister() {
        if (this.registerForm.valid && this.selectedFile) {
            console.log('Registration form is valid. Submitting...', this.registerForm.value);
            const formData = new FormData();
            for (const [key, value] of Object.entries(this.registerForm.value)) {
                formData.append(key, value);
            }
            console.log(formData);
            formData.append('profileImage', this.selectedFile);
            this.http.post('http://localhost:3000/account/register', formData)
                .subscribe({
                next: (response) => {
                    console.log('Registration successful', response);
                    this.registerForm.reset();
                    this.selectedFile = null;
                    this.registerImage.nativeElement.value = '';
                },
                error: (error) => {
                    console.error('Registration failed', error);
                }
            });
        }
        else {
            console.log('Registration form is invalid', this.registerForm.errors);
        }
    }
    handleLogin() {
        if (this.loginForm.valid) {
            const loginData = {
                accountEmail: this.loginForm.value.accountEmail,
                password: this.loginForm.value.password,
                accStatus: this.loginForm.value.accStatus,
            };
            this.http.post('http://localhost:3000/account/login', loginData)
                .subscribe({
                next: (response) => {
                    console.log(response);
                    this.currentAccountService.setCurrentUser(response);
                    this.router.navigate(['/dashboard']);
                },
                error: (error) => {
                    console.error('Login failed', error);
                }
            });
        }
        else {
            console.log('Login form is invalid', this.loginForm.errors);
        }
    }
};
__decorate([
    ViewChild('registerImage')
], LoginregisterComponent.prototype, "registerImage", void 0);
LoginregisterComponent = __decorate([
    Component({
        selector: 'app-loginregister',
        imports: [CommonModule, ReactiveFormsModule],
        templateUrl: './loginregister.component.html',
        styleUrl: './loginregister.component.css'
    })
], LoginregisterComponent);
export { LoginregisterComponent };
