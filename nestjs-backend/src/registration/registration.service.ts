import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountDto } from 'src/dto/AccountDto';
import { CreateTradesmanDto } from 'src/dto/CreateTradesmenDto';
import { ResponseDto } from 'src/dto/ResponseDto';
import { Client } from 'src/entity/Client';
import { Tradesman } from 'src/entity/Tradesman';
import { Repository } from 'typeorm';


@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Tradesman)
    private tradesmanRepository: Repository<Tradesman>,

    @InjectRepository(Client)
    private clientRepository: Repository<Client> // Add client repository if needed
  ) { }

  async create(createTradesmanDto: CreateTradesmanDto, file: Express.Multer.File): Promise<Tradesman | Client> {



    if (createTradesmanDto.accStatus === 'tradesman') {
      const tradesmanAccount = new Tradesman();
      Object.assign(tradesmanAccount, createTradesmanDto);

      if (file) {
        tradesmanAccount.profileImage = file.buffer;
      }
      
      console.log('Saving tradesman to database', tradesmanAccount);
      const savedTradesman = await this.tradesmanRepository.save(tradesmanAccount);
      console.log('Tradesman saved successfully', savedTradesman.id);
      return savedTradesman;

    } else if (createTradesmanDto.accStatus === 'client') {
      const customerAccount = new Client();
      Object.assign(customerAccount, createTradesmanDto);

      if (file) {
        customerAccount.profileImage = file.buffer;
      }

      console.log('Saving tradesman to database', customerAccount);
      const savedClient = await this.clientRepository.save(customerAccount);
      console.log('Client saved successfully', savedClient.id);
      return savedClient;
    } else {
      console.error('Invalid account status');
      throw new Error('Invalid account status');
    }
  }


  async checkLogin(account: AccountDto){

    const newAccount = new AccountDto();
    Object.assign(newAccount, account)
    let user: Client | Tradesman | null = null;

    if(newAccount.accStatus === 'tradesman'){
      user = await this.tradesmanRepository.findOne({
        where:{
          accountEmail: newAccount.accountEmail,
          password: newAccount.password,
          accStatus: newAccount.accStatus
        }
      })
    }else if (newAccount.accStatus === 'client'){
      user = await this.clientRepository.findOne({
        where:{
          accountEmail: newAccount.accountEmail,
          password: newAccount.password,
          accStatus: 'client'
        }
      })

    }else{
      throw new Error("Account status is bad");
      
    }


    if(user){
      const responseLogin = new ResponseDto();
      responseLogin['tradesmanId'] = user.id;
      responseLogin['tradesmanFirstName'] = user.firstName;
      responseLogin['tradesmanLastName'] = user.lastName;
      responseLogin['contactPhone'] = user.contactPhone;
      responseLogin['contactEmail'] = user.contactEmail;  
      console.log(responseLogin);
       return responseLogin;
    }else{
      console.log("Not login")
      throw new Error("Bad credentials")
    }
  }
  async findAll(): Promise<Tradesman[]> {
    return this.tradesmanRepository.find();
  }

  async findOneTradesman(id: number): Promise<Tradesman> {
    return this.tradesmanRepository.findOne({ where: { id } });
  }

  async findOneClient(id: number): Promise<Client> {
    return this.clientRepository.findOne({ where: { id } });
  }


}