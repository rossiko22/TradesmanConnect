import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { ServiceDto } from 'src/dto/ServiceDto';
import { Service } from 'src/entity/Service';
import { Tradesman } from 'src/entity/Tradesman';
import { Repository } from 'typeorm';

@Injectable()
export class TradesmanServicesService {
    constructor(
        @InjectRepository(Service)
        private servicesRepositry: Repository<Service>
    ){};


    private mapServiceToDto(service: Service): ServiceDto {
      const serviceDto = new ServiceDto();
      serviceDto.tradesmanFirstName = service.tradesmanFirstName;
      serviceDto.tradesmanLastName = service.tradesmanLastName;
      serviceDto.contactPhone = service.contactPhone;
      serviceDto.contactEmail = service.contactEmail;
      serviceDto.serviceTitle = service.serviceTitle;
      serviceDto.serviceCategory = service.serviceCategory;
      serviceDto.serviceCity = service.serviceCity;
      serviceDto.serviceCountry = service.serviceCountry;
      serviceDto.availableDaysEnd = service.availableDaysEnd;
      serviceDto.availableDaysStart = service.availableDaysStart;
      serviceDto.serviceTimeEnd = service.serviceTimeEnd;
      serviceDto.serviceTimeStart = service.serviceTimeStart;
      serviceDto.tradesmanId = service.tradesmanId;
      return serviceDto;
  }


    async create(serviceDto: ServiceDto){
        console.log(serviceDto);
        const capitalziedObject: ServiceDto = this.capitalizeObjectValuesExceptEmail(serviceDto);
        return this.servicesRepositry.save(capitalziedObject);
    }


    capitalizeObjectValues(obj: any): any {
        Object.keys(obj).forEach((key) => {
          if (typeof obj[key] === 'string') {
            obj[key] = obj[key].charAt(0).toUpperCase() + obj[key].slice(1).toLowerCase();
          }
        });
        return obj;
      }

    capitalizeObjectValuesExceptEmail(obj: any): any {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'string' && key !== 'contactEmail') {
          obj[key] = obj[key].charAt(0).toUpperCase() + obj[key].slice(1).toLowerCase();
        }
      });
      return obj;
    }
    
    async find(): Promise<ServiceDto[]>{
      const services = await this.servicesRepositry.find();
      return services.map(service => this.mapServiceToDto(service));
    }
    
}
