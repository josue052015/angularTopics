import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  exports:[
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModuleModule { }
