import { TestBed } from '@angular/core/testing';

import { TradesmanServicesService } from './tradesman-services.service';

describe('TradesmanServicesService', () => {
  let service: TradesmanServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradesmanServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
