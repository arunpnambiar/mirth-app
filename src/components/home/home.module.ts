import { CustomTableModule } from './../custom-table/custom-table.module';
import { CustomDialogboxModule } from './../custom-dialogbox/custom-dialogbox.module';
import { ApplicationFormModule } from './../application-form/application-form.module';
import { MaterialModule } from './../material/material.module';
import { HomeRoutingModule } from './home-routing/home-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ApplicationFormModule,
    CustomDialogboxModule,
    MaterialModule,
    CustomTableModule,
  ],
})
export class HomeModule {}
