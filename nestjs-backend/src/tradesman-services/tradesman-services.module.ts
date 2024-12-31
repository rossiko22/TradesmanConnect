import { Module } from '@nestjs/common';
import { TradesmanServicesController } from './tradesman-services.controller';
import { TradesmanServicesService } from './tradesman-services.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from 'src/entity/Service';

@Module({
  imports:[TypeOrmModule.forFeature([Service])],
  controllers: [TradesmanServicesController],
  providers: [TradesmanServicesService]
})
export class TradesmanServicesModule {}
