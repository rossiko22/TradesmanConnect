import { AccountDto } from 'src/dto/AccountDto';
import { CreateTradesmanDto } from 'src/dto/CreateTradesmenDto';
import { ResponseDto } from 'src/dto/ResponseDto';
import { Client } from 'src/entity/Client';
import { Tradesman } from 'src/entity/Tradesman';
import { Repository } from 'typeorm';
export declare class RegistrationService {
    private tradesmanRepository;
    private clientRepository;
    constructor(tradesmanRepository: Repository<Tradesman>, clientRepository: Repository<Client>);
    create(createTradesmanDto: CreateTradesmanDto, file: Express.Multer.File): Promise<Tradesman | Client>;
    checkLogin(account: AccountDto): Promise<ResponseDto>;
    findAll(): Promise<Tradesman[]>;
    findOneTradesman(id: number): Promise<Tradesman>;
    findOneClient(id: number): Promise<Client>;
}
