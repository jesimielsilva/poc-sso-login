import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSsoInComponent } from './auth/login-sso-in/login-sso-in.component';
import { SingUpInComponent } from './auth/sing-up-in/sing-up-in.component';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSystemComponent } from './forms/form-system/form-system.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSsoInComponent,
    SingUpInComponent,
    HeaderComponent,
    FooterComponent,
    FormSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
