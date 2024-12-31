import { Routes } from '@angular/router';
import { ChooselanguageComponent } from './chooselanguage/chooselanguage.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { ChoosesserviceComponent } from './choosesservice/choosesservice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CreateServiceComponent } from './create-service/create-service.component';

export const routes: Routes = [
    {path: '', redirectTo: 'choose-language', pathMatch: 'full'  },
    {path: 'choose-language', component: ChooselanguageComponent},
    {path: 'login-register', component: LoginregisterComponent},
    {path: 'choose-service', component: ChoosesserviceComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'services-page', component:ServicesPageComponent},
    {path: 'contact-us', component: ContactPageComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'create-service', component: CreateServiceComponent},
    {path: '**', redirectTo: 'choose-language'}

];
