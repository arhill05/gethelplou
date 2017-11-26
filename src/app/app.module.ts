import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { HttpModule } from '@angular/http';
import { DataHttpService } from './dataHttp.service';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'organizations', component: OrganizationsComponent},
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    OrganizationListComponent,
    OrganizationsComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBkDKws3bhe_5Fnp_D9G4C6e_sWYEqkKbE' }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
