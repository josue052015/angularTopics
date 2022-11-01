import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemonSlayersListComponent } from './demon-slayers-list/demon-slayers-list.component';
import { AddDemonSlayerFormComponent } from './add-demon-slayer-form/add-demon-slayer-form.component';
import { FormsModule } from '@angular/forms';
import { AddDemonSlayerWithOutputComponent } from './add-demon-slayer-with-output/add-demon-slayer-with-output.component';



@NgModule({
  declarations: [
    DemonSlayersListComponent,
    AddDemonSlayerFormComponent,
    AddDemonSlayerWithOutputComponent
  ],
  exports:[
    DemonSlayersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ParentAndChildComunicationModule { }
