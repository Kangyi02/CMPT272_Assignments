import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ColorsDirective } from './colors.directive';
import { CountPeoplePipe } from './count-people.pipe';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { PersonAddFormComponent } from './person-add-form/person-add-form.component';
import { RoutingModule } from './routing.module';
import { PersonViewComponent } from './person-view/person-view.component';
import { PeopleService } from './people.service';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleListComponent,
    ColorsDirective,
    CountPeoplePipe,
    SearchPipe,
    PersonAddFormComponent,
    PersonViewComponent,
    PersonEditComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
