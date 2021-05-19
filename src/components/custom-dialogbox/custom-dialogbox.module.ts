import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDialogboxComponent } from './custom-dialogbox.component';

@NgModule({
  declarations: [CustomDialogboxComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
})
export class CustomDialogboxModule {}
