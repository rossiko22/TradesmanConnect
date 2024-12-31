import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../shared/types/service.model';
import { CurrentAccountService } from '../services/current-account.service';
import { TestLogin } from '../shared/types/TestLogin';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class CreateServiceComponent implements OnInit {
  serviceForm!: FormGroup;
  currentAccount: TestLogin | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private currentAccountService: CurrentAccountService,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
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

  onSubmit(): void {
    if (this.serviceForm.valid) {
      const service: Service = this.serviceForm.value;
      const firstAndLastName = {
        tradesmanFirstName: this.currentAccount?.tradesmanFirstName,
        tradesmanLastName: this.currentAccount?.tradesmanLastName,
        contactPhone: this.currentAccount?.contactPhone,
        contactEmail: this.currentAccount?.contactEmail,
        tradesmanId: this.currentAccount?.tradesmanId
      }
      console.log(service);

      const objectToSend = {...firstAndLastName, ...service};

      console.log(objectToSend);
      
      
      this.http.post<Service>('http://localhost:3000/tradesman-services', objectToSend)
      .subscribe({
        next: (response) =>{
          console.log(response);
          // this.serviceForm.reset();
        },
        error: (error) =>{
          console.error('Error creating service', error);
          alert('Error creating service');
        }
      })
    }
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}