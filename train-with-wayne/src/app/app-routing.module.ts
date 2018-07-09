import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './main/landing-page/landing-page.component';
import { LoginPageComponent } from './main/login-page/login-page.component';
import { RegisterPageComponent } from './main/register-page/register-page.component';
import { DashboardPageComponent } from './main/dashboard-page/dashboard-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
