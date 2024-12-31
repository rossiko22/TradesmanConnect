import { Injectable } from '@angular/core';
import { AccountStatus } from '../shared/types/accountstatus.model';

@Injectable({
  providedIn: 'root'
})
export class AccountstatusService {

  private accountStatus: AccountStatus = 'tradesman';


  getAccountStatus(): AccountStatus {
    return this.accountStatus;
  }

  setAccountStatus(status: AccountStatus) {
    this.accountStatus = status;
  }
  
}
