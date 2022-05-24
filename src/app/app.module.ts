import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ParentComponent } from './sharing-data-via-input/parent/parent.component';
import { Child2Component } from './sharing-data-viewchild/child2/child2.component';
import { Parent3Component } from './sharing-data-output-and-eventemitter/parent3/parent3.component';
import { Child3Component } from './sharing-data-output-and-eventemitter/child3/child3.component';
import { Parent4Component } from './sharing-data-unrelated-component-with-service/parent4/parent4.component';
import { SiblingComponent } from './sharing-data-unrelated-component-with-service/sibling/sibling.component';
import { ExampleComponent } from './Sharing-data-NgModel/example/example.component';
import { ChildComponent } from './sharing-data-via-input/child/child.component';
import { Parent2Component } from './sharing-data-viewchild/parent2/parent2.component';
import { SelectHotelComponent } from './service-to-store-data-for-component/select-hotel/select-hotel.component';
import { GameListComponent } from './interface-example/game-list/game-list.component';
import { ItemGameComponent } from './interface-example/item-game/item-game.component';
import { ValidatorExampleComponent } from './validator_example/validator-example/validator-example.component';
import { FormControlExampleComponent } from './angular-formcontrol-example/form-control-example/form-control-example.component';
import { FormcontrolWithFormgroupComponent } from './angular-formcontrol-example/formcontrol-with-formgroup/formcontrol-with-formgroup.component';
import { FormcontrolWithFormarrayComponent } from './angular-formcontrol-example/formcontrol-with-formarray/formcontrol-with-formarray.component';
import { FormControlWithFormbuilderComponent } from './angular-formcontrol-example/form-control-with-formbuilder/form-control-with-formbuilder.component';
import { AddRemoveFormComponent } from './dynamically-add-remove-form/add-remove-form/add-remove-form.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MessageDialogComponent } from './angular-material-dialog-modal/message-dialog/message-dialog.component';
import { ParentDialogExampleComponent } from './angular-material-dialog-modal/parent-dialog-example/parent-dialog-example.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PersistDataComponent } from './persist-data-using-local-storage/persist-data/persist-data.component';
import { APP_ROUTING } from './myapp.routing';
import { HeaderComponent } from './header/header/header.component';
import { SelectRoomComponent } from './service-to-store-data-for-component/select-room/select-room.component';

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
    SiblingComponent,
    ExampleComponent,
    SelectHotelComponent,
    GameListComponent,
    ItemGameComponent,
    ValidatorExampleComponent,
    FormControlExampleComponent,
    FormcontrolWithFormgroupComponent,
    FormcontrolWithFormarrayComponent,
    FormControlWithFormbuilderComponent,
    AddRemoveFormComponent,
    MessageDialogComponent,
    ParentDialogExampleComponent,
    PersistDataComponent,
    HeaderComponent,
    SelectRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    APP_ROUTING

  ],
  exports:[MatInputModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
