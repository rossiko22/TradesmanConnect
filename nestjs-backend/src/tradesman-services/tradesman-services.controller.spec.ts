import { Test, TestingModule } from '@nestjs/testing';
import { TradesmanServicesController } from './tradesman-services.controller';

describe('TradesmanServicesController', () => {
  let controller: TradesmanServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradesmanServicesController],
    }).compile();

    controller = module.get<TradesmanServicesController>(TradesmanServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
