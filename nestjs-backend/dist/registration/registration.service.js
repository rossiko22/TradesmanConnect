"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AccountDto_1 = require("../dto/AccountDto");
const ResponseDto_1 = require("../dto/ResponseDto");
const Client_1 = require("../entity/Client");
const Tradesman_1 = require("../entity/Tradesman");
const typeorm_2 = require("typeorm");
let RegistrationService = class RegistrationService {
    constructor(tradesmanRepository, clientRepository) {
        this.tradesmanRepository = tradesmanRepository;
        this.clientRepository = clientRepository;
    }
    async create(createTradesmanDto, file) {
        if (createTradesmanDto.accStatus === 'tradesman') {
            const tradesmanAccount = new Tradesman_1.Tradesman();
            Object.assign(tradesmanAccount, createTradesmanDto);
            if (file) {
                tradesmanAccount.profileImage = file.buffer;
            }
            console.log('Saving tradesman to database', tradesmanAccount);
            const savedTradesman = await this.tradesmanRepository.save(tradesmanAccount);
            console.log('Tradesman saved successfully', savedTradesman.id);
            return savedTradesman;
        }
        else if (createTradesmanDto.accStatus === 'client') {
            const customerAccount = new Client_1.Client();
            Object.assign(customerAccount, createTradesmanDto);
            if (file) {
                customerAccount.profileImage = file.buffer;
            }
            console.log('Saving tradesman to database', customerAccount);
            const savedClient = await this.clientRepository.save(customerAccount);
            console.log('Client saved successfully', savedClient.id);
            return savedClient;
        }
        else {
            console.error('Invalid account status');
            throw new Error('Invalid account status');
        }
    }
    async checkLogin(account) {
        const newAccount = new AccountDto_1.AccountDto();
        Object.assign(newAccount, account);
        let user = null;
        if (newAccount.accStatus === 'tradesman') {
            user = await this.tradesmanRepository.findOne({
                where: {
                    accountEmail: newAccount.accountEmail,
                    password: newAccount.password,
                    accStatus: newAccount.accStatus
                }
            });
        }
        else if (newAccount.accStatus === 'client') {
            user = await this.clientRepository.findOne({
                where: {
                    accountEmail: newAccount.accountEmail,
                    password: newAccount.password,
                    accStatus: 'client'
                }
            });
        }
        else {
            throw new Error("Account status is bad");
        }
        if (user) {
            const responseLogin = new ResponseDto_1.ResponseDto();
            responseLogin['tradesmanId'] = user.id;
            responseLogin['tradesmanFirstName'] = user.firstName;
            responseLogin['tradesmanLastName'] = user.lastName;
            responseLogin['contactPhone'] = user.contactPhone;
            responseLogin['contactEmail'] = user.contactEmail;
            console.log(responseLogin);
            return responseLogin;
        }
        else {
            console.log("Not login");
            throw new Error("Bad credentials");
        }
    }
    async findAll() {
        return this.tradesmanRepository.find();
    }
    async findOneTradesman(id) {
        return this.tradesmanRepository.findOne({ where: { id } });
    }
    async findOneClient(id) {
        return this.clientRepository.findOne({ where: { id } });
    }
};
exports.RegistrationService = RegistrationService;
exports.RegistrationService = RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Tradesman_1.Tradesman)),
    __param(1, (0, typeorm_1.InjectRepository)(Client_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RegistrationService);
//# sourceMappingURL=registration.service.js.map