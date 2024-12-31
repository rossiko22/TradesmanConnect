import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceDto } from '../shared/types/servicesDto.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Here i figured out that is better to put the http request inside the service instead of the component.
export class TradesmanServicesService {

  services: ServiceDto[] = [];
  constructor(private http: HttpClient) {}



  getAllServices(): Observable<ServiceDto[]> {
    return this.http.get<ServiceDto[]>('http://localhost:3000/tradesman-services/all');
  }


}
