import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    PhoneComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
