import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Language } from '../shared/types/language.model';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-chooselanguage',
  imports: [CommonModule],
  templateUrl: './chooselanguage.component.html',
  styleUrl: './chooselanguage.component.css'
})
export class ChooselanguageComponent{

  constructor(private readonly languageService: LanguageService, private router: Router){}


  setCurrentLanguage(language: Language){
    this.languageService.setCurrentLanguage(language);
    return this.router.navigate(['/choose-service']);
  }


}
