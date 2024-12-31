import { Injectable } from '@angular/core';
import { TestLogin } from '../shared/types/TestLogin';

@Injectable({
  providedIn: 'root'
})
export class CurrentAccountService {

  currentLoggedInUser: TestLogin = {
    tradesmanFirstName: 'John Doe',
    tradesmanLastName: 'Smith',
    contactEmail: 'john.doe@example.com',
    contactPhone: '1234567890',
    tradesmanId: 1234567890,
  };


  setCurrentUser(user: TestLogin): void {
    this.currentLoggedInUser = user;
  }

  getCurrentUser(): TestLogin {
    return this.currentLoggedInUser;
  }
}
