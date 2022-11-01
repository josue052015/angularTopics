import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModuleComponent } from './forms-module.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormsModuleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormsModuleComponent
  ]
})
export class FormsModuleModule { }
