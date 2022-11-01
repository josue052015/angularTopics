import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentWithModuleComponent } from './component-with-module.component';


@NgModule({
  declarations: [
    ComponentWithModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentWithModuleComponent
  ]
})
export class ComponentWithModuleModule { }
