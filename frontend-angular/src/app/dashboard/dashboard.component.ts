import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccountstatusService } from '../services/accountstatus.service';
import { CurrentAccountService } from '../services/current-account.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  accountStatus: string | null = null;
  constructor(private readonly accountStatusService: AccountstatusService, private readonly currentAccountService: CurrentAccountService){}

  currentImg: string = '';

  ngOnInit(): void {
    this.accountStatus = this.accountStatusService.getAccountStatus();
  }



}
