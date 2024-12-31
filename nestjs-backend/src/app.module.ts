import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tradesman } from './entity/Tradesman';
import { Client } from './entity/Client';
import { RegistrationModule } from './registration/registration.module';
import { TradesmanServicesModule } from './tradesman-services/tradesman-services.module';
import { TradesmanServicesController } from './tradesman-services/tradesman-services.controller';
import { TradesmanServicesService } from './tradesman-services/tradesman-services.service';
import { Service } from './entity/Service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '225588',
      database: 'tradesman_project',
      entities: [Tradesman, Client, Service],
      synchronize: true
    }),
    RegistrationModule,
    TradesmanServicesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
