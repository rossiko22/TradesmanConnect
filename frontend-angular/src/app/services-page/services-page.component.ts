import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TradesmanServicesService } from '../services/tradesman-services.service';
import { ServiceDto } from '../shared/types/servicesDto.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent implements OnInit{
  filterForm: FormGroup = undefined as unknown as FormGroup;
  services: ServiceDto[] = [];
  countries: string[] = [];
  cities: string[] = [];
  professions: string[] = [];

  constructor(private tradesmanServicesService: TradesmanServicesService, private fb: FormBuilder){}


  ngOnInit(): void {
    this.loadServices();

    this.filterForm =  this.fb.group({
      country: [''],
      city: [''],
      profession: [''],
      keyword: ['']
  });
  }

  loadServices() {
    this.tradesmanServicesService.getAllServices().subscribe({
      next: (services) => {
        this.services = services;
        console.log('Services loaded:', this.services);
      },
      error: (error) => {
        console.error('Error loading services:', error);
      }
    });
  }

  onSubmit(){
    const filteredServices: ServiceDto[] = {...this.services}

    console.log('Filtered services:', filteredServices);

    const a = filteredServices.filter(service => service.serviceCountry === 'Canada');
    console.log('Canada services:', a);
  }
}
