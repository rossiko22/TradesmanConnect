import { TestBed } from '@angular/core/testing';

import { AccountstatusService } from './accountstatus.service';

describe('AccountstatusService', () => {
  let service: AccountstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
