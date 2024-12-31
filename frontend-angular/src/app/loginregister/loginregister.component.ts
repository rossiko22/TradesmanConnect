  import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  import { ActiveForm } from '../shared/types/activeform.model';
  import { CommonModule } from '@angular/common';
  import { AccountstatusService } from '../services/accountstatus.service';
  import { LanguageService } from '../services/language.service';
  import { Language } from '@ngx-translate/core';
  import { AccountStatus } from '../shared/types/accountstatus.model';
  import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
    import { HttpClient } from '@angular/common/http';
    import { Router } from '@angular/router';
import { TestLogin } from '../shared/types/TestLogin';
import { CurrentAccountService } from '../services/current-account.service';

  @Component({
    selector: 'app-loginregister',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './loginregister.component.html',
    styleUrl: './loginregister.component.css'
  })
  export class LoginregisterComponent implements OnInit{

    activeForm: ActiveForm = 'login';
    accountStatus: AccountStatus;
    currentLang: Language;
    selectedFile: File | null = null;
    imgUrl: string = '';

    loginForm: FormGroup = undefined as unknown as FormGroup;
    registerForm: FormGroup = undefined as unknown as FormGroup;

    @ViewChild('registerImage') registerImage: ElementRef<HTMLInputElement> = undefined as unknown as ElementRef<HTMLInputElement>;

    constructor(private currentAccountService: CurrentAccountService, private formBuilder: FormBuilder, private accountStatusService: AccountstatusService, private langaugeService: LanguageService,private http: HttpClient, private router: Router) {
      this.accountStatus = this.accountStatusService.getAccountStatus();
      this.currentLang = this.langaugeService.getCurrentLanguage();
    }

    toggleForm(form: ActiveForm): void{
      if(form === 'login'){
        this.activeForm = 'login';
      }else if(form === 'register'){
        this.activeForm = 'register';
      }
    }

    checkLogin(){
      console.log(this.loginForm.value);
      this.loginForm.reset();
      
    }

    checkRegister(){
      if(this.accountStatus === 'tradesman'){
        console.log(this.registerForm.value);
      }else if (this.accountStatus === 'client'){
        const object = this.registerForm.value;
        delete object.profession;
        console.log(object);
      }

      this.registerForm.reset();
      
    }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        accountEmail: ['', Validators.required],
        password: ['', Validators.required],
        accStatus: this.accountStatus === 'tradesman'? 'tradesman' : 'client'
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
        Validators.required]],
      confirmPassword: ['', [Validators.required]],
      accStatus: this.accountStatus === 'tradesman'? 'tradesman' : 'client'
    },{
      validator: this.passwordMatchValidator // This may be a problem
    });
    }

    onFileSelected(event: Event): void {
      const file = (event.target as HTMLInputElement).files![0];
      if (file) {
        this.selectedFile = file;
        console.log('File selected:', file.name);
      } else {
        this.selectedFile = null;
        console.log('No file selected');
      }
    }

    passwordMatchValidator(formGroup: FormGroup) {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
    
      return password === confirmPassword ? null : { mismatch: true };
    }
    
    handleRegister(): void {
      if (this.registerForm.valid && this.selectedFile) {
        console.log('Registration form is valid. Submitting...', this.registerForm.value);
  
        const formData = new FormData();

        for(const [key, value] of Object.entries(this.registerForm.value)){
          formData.append(key, value as string | Blob);
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
      } else {
        console.log('Registration form is invalid', this.registerForm.errors);
      }
    }


    handleLogin() {
      if (this.loginForm.valid) {
    
        const loginData = {
          accountEmail: this.loginForm.value.accountEmail,
          password: this.loginForm.value.password,
          accStatus: this.loginForm.value.accStatus,
        }
        
    
    
        this.http.post<TestLogin>('http://localhost:3000/account/login', loginData)
          .subscribe({
            next: (response: TestLogin) => {

              this.currentAccountService.setCurrentUser(response);
              console.log('Login successful', response);

              this.router.navigate(['/dashboard']);
            },
            error: (error) => {
              console.error('Login failed', error);
            }
          });
      } else {
        console.log('Login form is invalid', this.loginForm.errors);
      }
    }

}
