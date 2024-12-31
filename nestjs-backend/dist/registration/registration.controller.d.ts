import { RegistrationService } from './registration.service';
import { CreateTradesmanDto } from 'src/dto/CreateTradesmenDto';
import { Response } from 'express';
import { AccountDto } from 'src/dto/AccountDto';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    create(createTradesmanDto: CreateTradesmanDto, file: Express.Multer.File): Promise<import("../entity/Tradesman").Tradesman | import("../entity/Client").Client>;
    login(account: AccountDto): Promise<import("../dto/ResponseDto").ResponseDto>;
    getTradesmanImage(id: string, res: Response): Promise<void>;
    getClientImage(id: string, res: Response): Promise<void>;
}
