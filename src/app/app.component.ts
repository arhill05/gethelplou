import { Component } from '@angular/core';

import { DataHttpService } from './dataHttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  organizations: Array<Organization>;
  firstOrganization;
  title = 'app';
  startingCoords = {
    lat: 38.228732,
    lng: -85.714771
  };

  constructor(private _dataHttpService: DataHttpService) {
    this._dataHttpService.getData().subscribe(res => {
      console.log(res);
      if (res.length) {
        res.forEach(org => {
          org.lat = Number(org.lat);
          org.lng = Number(org.lng);
        });
        this.organizations = res;
      }
    });
  }
}
