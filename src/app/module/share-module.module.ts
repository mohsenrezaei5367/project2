import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { shareRoutingModule } from './share-routing.module';


import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
 shareRoutingModule
  ]
})
export class ShareModuleModule { }
