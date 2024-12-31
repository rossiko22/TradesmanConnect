import { ServiceDto } from 'src/dto/ServiceDto';
import { TradesmanServicesService } from './tradesman-services.service';
import { Service } from 'src/entity/Service';
export declare class TradesmanServicesController {
    private readonly tradesmanServicesService;
    constructor(tradesmanServicesService: TradesmanServicesService);
    createService(service: ServiceDto): Promise<ServiceDto & Service>;
    getAllServices(): Promise<ServiceDto[]>;
}
