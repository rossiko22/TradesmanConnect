import { Component } from '@angular/core';
import { AccountstatusService } from '../services/accountstatus.service';
import { Router } from '@angular/router';
import { AccountStatus } from '../shared/types/accountstatus.model';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-choosesservice',
  imports: [TranslatePipe],
  templateUrl: './choosesservice.component.html',
  styleUrl: './choosesservice.component.css'
})
export class ChoosesserviceComponent{

  currentLang = '';

  constructor(private readonly languageService: LanguageService, private readonly accountstatusService: AccountstatusService, private router: Router) {}

  ngOnInit() {
    this.currentLang = this.languageService.getCurrentLanguage();
  }

  setAccountStatus(status: AccountStatus) {
    this.accountstatusService.setAccountStatus(status);
    return this.router.navigate(['/login-register']);
  }

}
