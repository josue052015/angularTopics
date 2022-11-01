import { ReactiveModuleModule } from './components/reactive-module/reactive-module.module';
import { ParentAndChildComunicationModule } from './components/parent-and-child-comunication/parent-and-child-comunication.module';
import { FormsModuleModule } from './components/section 5/forms-module/forms-module/forms-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptTopicsComponent } from './components/typescript-topics/typescript-topics.component';
import { StateChangesComponent } from './components/state-changes/state-changes.component';
import { NgTemplateAndNgElseComponent } from './components/ng-template-and-ng-else/ng-template-and-ng-else.component';
import { ComponentWithModuleComponent } from './components/component-with-module/component-with-module.component';
import { ComponentWithModuleModule } from './components/component-with-module/component-with-module.module';
import { ViewchildExampleComponent } from './components/viewchild-example/viewchild-example.component';


@NgModule({
  declarations: [
    AppComponent,
    TypescriptTopicsComponent,
    StateChangesComponent,
    NgTemplateAndNgElseComponent,
    ViewchildExampleComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentWithModuleModule,
    FormsModuleModule,
    ParentAndChildComunicationModule,
    ReactiveModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
