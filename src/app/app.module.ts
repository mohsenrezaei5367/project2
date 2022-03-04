import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModuleModule } from './module/share-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './share/header/header.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { HomeComponent } from './module/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
