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
exports.RegistrationController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const registration_service_1 = require("./registration.service");
const CreateTradesmenDto_1 = require("../dto/CreateTradesmenDto");
const AccountDto_1 = require("../dto/AccountDto");
let RegistrationController = class RegistrationController {
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
    async create(createTradesmanDto, file) {
        console.log('Received registration request', createTradesmanDto);
        console.log('Received file', file);
        return await this.registrationService.create(createTradesmanDto, file);
    }
    async login(account) {
        console.log(account);
        return await this.registrationService.checkLogin(account);
    }
    async getTradesmanImage(id, res) {
        const tradesman = await this.registrationService.findOneTradesman(+id);
        if (tradesman && tradesman.profileImage) {
            res.set('Content-Type', 'image/jpeg');
            res.send(tradesman.profileImage);
        }
        else {
            res.status(404).send('Image not found');
        }
    }
    async getClientImage(id, res) {
        const tradesman = await this.registrationService.findOneClient(+id);
        if (tradesman && tradesman.profileImage) {
            res.set('Content-Type', 'image/jpeg');
            res.send(tradesman.profileImage);
        }
        else {
            res.status(404).send('Image not found');
        }
    }
};
exports.RegistrationController = RegistrationController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profileImage')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTradesmenDto_1.CreateTradesmanDto, Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AccountDto_1.AccountDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('tradesman/:id/image'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "getTradesmanImage", null);
__decorate([
    (0, common_1.Get)('client/:id/image'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "getClientImage", null);
exports.RegistrationController = RegistrationController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [registration_service_1.RegistrationService])
], RegistrationController);
//# sourceMappingURL=registration.controller.js.map