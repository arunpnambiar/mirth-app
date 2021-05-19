import { CustomTableComponent } from './../custom-table/custom-table.component';
import { ApplicationFormModule } from './../application-form/application-form.module';
import { CustomTableModule } from './../custom-table/custom-table.module';
import { MaterialModule } from './../material/material.module';
import { HomeRoutingModule } from './home-routing/home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, CustomTableComponent],
  imports: [CommonModule, HomeRoutingModule, ApplicationFormModule],
})
export class HomeModule {}
