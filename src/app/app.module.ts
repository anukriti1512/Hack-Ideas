import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './component/login/login.component';
import { HomeModule } from './component/home-page/home.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
