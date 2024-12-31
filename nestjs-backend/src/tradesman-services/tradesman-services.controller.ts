import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServiceDto } from 'src/dto/ServiceDto';
import { TradesmanServicesService } from './tradesman-services.service';
import { Service } from 'src/entity/Service';

@Controller('tradesman-services')
export class TradesmanServicesController {

    constructor(private readonly tradesmanServicesService: TradesmanServicesService){}
    
    @Post()
    async createService(@Body() service: ServiceDto){
        return await this.tradesmanServicesService.create(service);
    }

    @Get('/all')
    async getAllServices(): Promise<ServiceDto[]>  {
        return await this.tradesmanServicesService.find();
    }
}
