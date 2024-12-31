import { Test, TestingModule } from '@nestjs/testing';
import { TradesmanServicesService } from './tradesman-services.service';

describe('TradesmanServicesService', () => {
  let service: TradesmanServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TradesmanServicesService],
    }).compile();

    service = module.get<TradesmanServicesService>(TradesmanServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
