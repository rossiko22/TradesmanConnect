import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tradesman } from 'src/entity/Tradesman';
import { Client } from 'src/entity/Client';

@Module({
  imports: [TypeOrmModule.forFeature([Tradesman,Client])],
  providers: [RegistrationService],
  controllers: [RegistrationController]
})
export class RegistrationModule {}
