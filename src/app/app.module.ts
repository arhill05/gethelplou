import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { HttpModule } from '@angular/http';
import { DataHttpService } from './dataHttp.service';
import { OrganizationListComponent } from './organization-list/organization-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkDKws3bhe_5Fnp_D9G4C6e_sWYEqkKbE'
    })
  ],
  providers: [DataHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
