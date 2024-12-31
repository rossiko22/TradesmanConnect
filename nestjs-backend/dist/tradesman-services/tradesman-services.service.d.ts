import { ServiceDto } from 'src/dto/ServiceDto';
import { Service } from 'src/entity/Service';
import { Repository } from 'typeorm';
export declare class TradesmanServicesService {
    private servicesRepositry;
    constructor(servicesRepositry: Repository<Service>);
    private mapServiceToDto;
    create(serviceDto: ServiceDto): Promise<ServiceDto & Service>;
    capitalizeObjectValues(obj: any): any;
    capitalizeObjectValuesExceptEmail(obj: any): any;
    find(): Promise<ServiceDto[]>;
}
