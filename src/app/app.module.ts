import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './sharing-data-via-input/parent/parent.component';
import { ChildComponent } from './sharing-data-via-input/child/child.component';
import { Parent2Component } from './sharing-data-viewchild/parent2/parent2.component';
import { Child2Component } from './sharing-data-viewchild/child2/child2.component';
import { Parent3Component } from './sharing-data-output-and-eventemitter/parent3/parent3.component';
import { Child3Component } from './sharing-data-output-and-eventemitter/child3/child3.component';
import { Parent4Component } from './sharing-data-unrelated-component-with-service/parent4/parent4.component';
import { SiblingComponent } from './sharing-data-unrelated-component-with-service/sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    Parent4Component,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
