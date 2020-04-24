import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/employer/sitelayout/login/login.component';
import { NavbarComponent } from 'src/app/employer/sitelayout/navbar/navbar.component';
import { FooterComponent } from 'src/app/employer/sitelayout/footer/footer.component';
import { SitelayoutComponent } from './employer/sitelayout/sitelayout.component';
import { DashboardlayoutComponent } from './employer/dashboardlayout/dashboardlayout.component';
import { RegisterComponent } from 'src/app/employer/sitelayout/register/register.component';
import { NgSelect2Module } from 'ng-select2';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { VerifyComponent } from './employer/sitelayout/verify/verify.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SitelayoutComponent,
    DashboardlayoutComponent,
    RegisterComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelect2Module,
    FormsModule,
    Ng2TelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
