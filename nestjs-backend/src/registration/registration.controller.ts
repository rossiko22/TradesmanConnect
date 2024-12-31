import { Controller, Post, Body, UseInterceptors, UploadedFile, Get, Param, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegistrationService } from './registration.service';
import { CreateTradesmanDto } from 'src/dto/CreateTradesmenDto';
import { Response } from 'express';
import { AccountDto } from 'src/dto/AccountDto';

@Controller('account')
export class RegistrationController {
  constructor(
    private readonly registrationService: RegistrationService,
  ) { }

  @Post('register')
  @UseInterceptors(FileInterceptor('profileImage'))
  async create(@Body() createTradesmanDto: CreateTradesmanDto, @UploadedFile() file: Express.Multer.File) {
    console.log('Received registration request', createTradesmanDto);
    console.log('Received file', file);
    return await this.registrationService.create(createTradesmanDto, file);
  }

  @Post('login')
  async login(@Body() account: AccountDto){
    console.log(account);
    return await this.registrationService.checkLogin(account);
  }


  @Get('tradesman/:id/image')
  async getTradesmanImage(@Param('id') id: string, @Res() res: Response) {
    const tradesman = await this.registrationService.findOneTradesman(+id);
    if (tradesman && tradesman.profileImage) {
      res.set('Content-Type', 'image/jpeg');
      res.send(tradesman.profileImage);
    } else {
      res.status(404).send('Image not found');
    }
  }

  @Get('client/:id/image')
  async getClientImage(@Param('id') id: string, @Res() res: Response) {
    const tradesman = await this.registrationService.findOneClient(+id);
    if (tradesman && tradesman.profileImage) {
      res.set('Content-Type', 'image/jpeg');
      res.send(tradesman.profileImage);
    } else {
      res.status(404).send('Image not found');
    }
  }
}