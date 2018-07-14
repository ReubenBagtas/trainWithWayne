import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './main/landing-page/landing-page.component';
import { ChartsModule } from 'ng2-charts';
import { RegisterPageComponent } from './main/register-page/register-page.component';
import { DashboardPageComponent } from './main/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './main/login-page/login-page.component';
import { WeightBarComponent } from './components/charts/weigth-bar/weight-bar.component';
import { PushUpsLineGraphComponent } from './components/charts/push-ups-line-graph/push-ups-line-graph.component';
import { BodyPolarAreaComponent } from './components/charts/body-polar-area/body-polar-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    LoginPageComponent,
    WeightBarComponent,
    PushUpsLineGraphComponent,
    BodyPolarAreaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
